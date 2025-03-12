import { create } from "zustand";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseApp";

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
  addTodo: (title: string, date: string, content: string) => void;
  removeTodo: (id: string) => void;
  setModiTodo: (todo: Todo) => void;
  resetModiTodo: () => void;
  setImportantTodo: () => void;
  setAllTodo: () => void;
  removeTodoAll: () => void;
  setCompletedTodo: (todo: Todo) => void;
  removeCompletedTodo: (id: string) => void;
  setCompletedAllTodo: () => void;
  // setIncompleteTodo: (id: string) => void;
  getTodos: () => void;
  toggleImportantTodo: (todo: Todo) => void;
}

// ✅ Zustand 스토어 생성
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  modiTodo: null,
  filteredTodos: [],
  completedTodos: [],
  updatedTodos: [],

  getTodos: async () => {
    const todosSnapshot = await getDocs(collection(db, "todos"));
    const todosList = todosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Todo[];

    set({
      todos: todosList,
    });
  },

  toggleImportantTodo: async (todo) => {
    const TodoRef = doc(db, "todos", todo.id);
    await updateDoc(TodoRef, {
      isImportant: !todo.isImportant,
    });
  },

  setCompletedTodo: async (todo) => {
    const TodoRef = doc(db, "todos", todo.id);
    await updateDoc(TodoRef, {
      isCompleted: !todo.isCompleted,
    });
  },

  addTodo: (title, date, content) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now().toString(),
          title,
          date,
          content,
          isImportant: false,
          isCompleted: false,
        },
      ],
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  removeTodoAll: () =>
    set(() => ({
      todos: [],
    })),

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

  setCompletedAllTodo: () =>
    set((state) => {
      state.updatedTodos = state.todos.map((todo) => ({
        ...todo,
        isCompleted: true,
      }));

      return {
        completedTodos: [
          ...state.completedTodos,
          ...state.updatedTodos.filter((todo) => todo.isCompleted),
        ], // 완료된 todo 목록
        todos: [],
      };
    }),

  removeCompletedTodo: (id) =>
    set((state) => ({
      completedTodos: state.completedTodos.filter((todo) => todo.id !== id),
    })),
}));
