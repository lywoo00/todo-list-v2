import {
  create
} from "zustand";

interface Todo {
  id: number;
  title: string;
  date: string;
  content: string;
  isImportant: boolean;
}

interface TodoStore {
  todos: Todo[];
  modiTodo: Todo | null;
  filteredTodos:Todo[];
  addTodo: (title: string, date: string, content: string) => void;
  removeTodo: (id: number) => void;
  modifyTodo: (id: number, title: string, date: string, content: string) => void;
  setModiTodo: (todo: Todo) => void;
  resetModiTodo: () => void;
  toggleImportant: (id: number) => void;
  setImportantTodo: () => void;
  setAllTodo: () => void;
}

// ✅ Zustand 스토어 생성
export const useTodoStore = create < TodoStore > ((set) => ({
  todos: [],
  modiTodo: null,
  filteredTodos:[],
  addTodo: (title, date, content) =>
    set((state) => ({
      todos: [...state.todos, {
        id: Date.now(),
        title,
        date,
        content,
        isImportant: false
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

  toggleImportant: (id) => 
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo //체크한 아이템만 isImportant 반전
      ),
    })),

    setImportantTodo:() => 
    set((state) => ({
      filteredTodos:state.todos.filter((todo) => todo.isImportant == false ), //filteredTodos 중요하지 않은 일을 담아둠
      todos: state.todos.filter((todo) => todo.isImportant == true ), // todos에 중요한 일만 필터
    })),

    setAllTodo:() => 
      set((state) => ({
        todos:[...state.todos, ...state.filteredTodos.filter((filteredTodo) => !state.todos.some(todo => todo.id === filteredTodo.id))] // todos에 중복되지 않은 filteredTodos에 필터 된 일을 복사 이
      }))
}));

