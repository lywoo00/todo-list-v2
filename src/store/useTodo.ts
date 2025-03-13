import { create } from "zustand";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "../firebaseApp";

interface Todo {
  id: string;
  title: string;
  date: string;
  content: string;
  isImportant: boolean;
  isCompleted: boolean;
}

interface TodoStore {
  todos: Todo[];
  modiTodo: Todo | null;
  filteredTodos: Todo[];
  completedTodos: Todo[];
  updatedTodos: Todo[];
  deleteTodo: (todo: Todo) => void;
  setModiTodo: (todo: Todo) => void;
  resetModiTodo: () => void;
  setImportantTodo: () => void;
  setAllTodo: () => void;
  deleteTodoAll: () => void;
  setCompletedTodo: (todo: Todo) => void;
  setCompletedTodoAll: () => void;
  getTodos: () => void;
  toggleImportantTodo: (todo: Todo) => void;
}

// Zustand 스토어 생성
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  modiTodo: null,
  filteredTodos: [],
  completedTodos: [],
  updatedTodos: [],

  getTodos: async () => {
    const user = auth.currentUser;
    if (!user) return;
    const TodoRef = collection(db, "users", user.uid, "todos");
    const todosSnapshot = await getDocs(TodoRef);
    const todosList = todosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Todo[];
    set((state) => {
      if (JSON.stringify(state.todos) !== JSON.stringify(todosList)) {
        return { todos: todosList };
      }
      return state;
    });
  },

  toggleImportantTodo: async (todo) => {
    const user = auth.currentUser;
    const TodoRef = doc(db, "users", user.uid, "todos", todo.id);
    await updateDoc(TodoRef, {
      isImportant: !todo.isImportant,
    });
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === todo.id ? { ...t, isImportant: !t.isImportant } : t
      ),
    }));
  },

  setCompletedTodo: async (todo) => {
    const user = auth.currentUser;
    const TodoRef = doc(db, "users", user.uid, "todos", todo.id);
    await updateDoc(TodoRef, {
      isCompleted: !todo.isCompleted,
    });

    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
      ),
    }));
  },

  setCompletedTodoAll: async () => {
    const user = auth.currentUser;
    if (!user) return;

    const TodoRef = collection(db, "users", user.uid, "todos");
    const todosSnapshot = await getDocs(TodoRef);

    const completedTodosAll = todosSnapshot.docs.map((todo) =>
      updateDoc(doc(db, "users", user.uid, "todos", todo.id), {
        isCompleted: true,
      })
    );
    await Promise.all(completedTodosAll);

    set((state) => ({
      todos: state.todos.map((todo) => ({ ...todo, isCompleted: true })),
    }));
  },

  deleteTodo: async (todo) => {
    const user = auth.currentUser;
    if (!user) return;

    if (todo.id) await deleteDoc(doc(db, "users", user.uid, "todos", todo.id));

    set((state) => ({
      todos: state.todos.filter((t) => t.id !== todo.id),
    }));
  },

  deleteTodoAll: async () => {
    const user = auth.currentUser;
    if (!user) return;

    const TodoRef = collection(db, "users", user.uid, "todos");
    const todosSnapshot = await getDocs(TodoRef);
    const deleteTodoAll = todosSnapshot.docs.map((todo) =>
      deleteDoc(doc(db, "users", user.uid, "todos", todo.id))
    );
    await Promise.all(deleteTodoAll);
    set(() => ({
      todos: [],
    }));
  },

  setModiTodo: (todo) =>
    set({
      modiTodo: todo,
    }),

  resetModiTodo: () =>
    set({
      modiTodo: null,
    }),

  setImportantTodo: () =>
    set((state) => ({
      filteredTodos: state.todos.filter((todo) => !todo.isImportant).length
        ? state.todos.filter((todo) => todo.isImportant == false)
        : state.filteredTodos, //filteredTodos 중요하지 않은 일이 있을 때만  담아둠

      todos: state.todos.filter((todo) => todo.isImportant == true).length
        ? state.todos.filter((todo) => todo.isImportant == true)
        : state.todos, // 중요표시 한 할 일이 있을 때만 필터링 함
    })),

  setAllTodo: () =>
    set((state) => ({
      todos: [
        ...state.todos,
        ...state.filteredTodos.filter(
          (filteredTodo) =>
            !state.todos.some((todo) => todo.id === filteredTodo.id)
        ),
      ], // todos에 중복되지 않은 filteredTodos에 필터 된 일을 복사
    })),
}));
