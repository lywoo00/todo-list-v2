import { create } from "zustand";

interface Todo {
  id: number;
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
  removeTodo: (id: number) => void;
  modifyTodo: (
    id: number,
    title: string,
    date: string,
    content: string
  ) => void;
  setModiTodo: (todo: Todo) => void;
  resetModiTodo: () => void;
  toggleImportant: (id: number) => void;
  setImportantTodo: () => void;
  setAllTodo: () => void;
  removeTodoAll: () => void;
  setCompletedTodo: (id: number) => void;
  removeCompletedTodo: (id: number) => void;
  setCompletedAllTodo: () => void;
}

// ✅ Zustand 스토어 생성
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  modiTodo: null,
  filteredTodos: [],
  completedTodos: [],
  updatedTodos: [],

  addTodo: (title, date, content) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
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

  modifyTodo: (id, title, date, content) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title,
              date,
              content,
            }
          : todo
      ),
      modiTodo: null,
    })),

  setModiTodo: (todo) =>
    set({
      modiTodo: todo,
    }),

  resetModiTodo: () =>
    set({
      modiTodo: null,
    }),

  toggleImportant: (id) =>
    set((state) => ({
      todos: state.todos.map(
        (todo) =>
          todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo //체크한 아이템만 isImportant 반전
      ),
    })),

  setImportantTodo: () =>
    set((state) => ({
      filteredTodos: state.todos.filter((todo) => todo.isImportant == false), //filteredTodos 중요하지 않은 일을 담아둠

      todos: state.todos.filter((todo) => todo.isImportant == true).length
        ? state.todos.filter((todo) => todo.isImportant == true)
        : state.todos, // 중요표시 한 할 일이 있을 떄만 필터링 함
    })),

  setAllTodo: () =>
    set((state) => ({
      todos: [
        ...state.todos,
        ...state.filteredTodos.filter(
          (filteredTodo) =>
            !state.todos.some((todo) => todo.id === filteredTodo.id)
        ),
      ], // todos에 중복되지 않은 filteredTodos에 필터 된 일을 복사 이
    })),

  setCompletedTodo: (id) =>
    set((state) => {
      state.updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      ); // 완료 체크된 todo의 isCompleted 값을 true로 변경

      return {
        completedTodos: [
          ...state.completedTodos,
          ...state.updatedTodos.filter((todo) => todo.isCompleted),
        ], // 완료된 todo 목록
        todos: [...state.updatedTodos.filter((todo) => !todo.isCompleted)], // 미완료된 todo 목록
      };
    }),

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
