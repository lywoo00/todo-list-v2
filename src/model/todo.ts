export interface Todo {
  id: number;
  title: string;
  date: string;
  content: string;
  isImportant: boolean;
}

export interface TodoStore {
  todos: Todo[];
  modiTodo: Todo | null;
  addTodo: (title: string, date: string, content: string) => void;
  removeTodo: (id: number) => void;
  modifyTodo: (id: number, title: string, date: string, content: string) => void;
  setModiTodo: (todo: Todo) => void;
  resetModiTodo: () => void;
  toggleImportant: (id: number) => void;
}