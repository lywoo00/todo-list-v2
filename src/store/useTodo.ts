import {
  create
} from "zustand";

interface Todo {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface TodoStore {
  todos: Todo[];
  modiTodo: Todo | null;
  addTodo: (title: string, date: string, content: string) => void;
  removeTodo: (id: number) => void;
  modifyTodo: (id: number, title: string, date: string, content: string) => void;
  setModiTodo: (todo: Todo) => void;
  resetModiTodo: () => void;
}

// ✅ Zustand 스토어 생성
export const useTodoStore = create < TodoStore > ((set) => ({
  todos: [],
  modiTodo: null,

  addTodo: (title, date, content) =>
    set((state) => ({
      todos: [...state.todos, {
        id: Date.now(),
        title,
        date,
        content
      }],
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  modifyTodo: (id, title, date, content) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? {
          ...todo,
          title,
          date,
          content
        } : todo
      ),
      modiTodo: null,
    })),


  setModiTodo: (todo) => set({
    modiTodo: todo
  }),


  resetModiTodo: () => set({
    modiTodo: null
  }),
}));

