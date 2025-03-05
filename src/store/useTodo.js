import {
  create
} from 'zustand';

export const useTodoStore = create((set) => ({
  todos: [],
  modiTodo: null,
  addTodo: (title, date, content) =>
    set((state) => ({
      todos: [...state.todos, {
        id: Date.now(),
        title,
        date,
        content
      }]
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    })),

  motdifyTodo: (id, title, date, content) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? {
          ...todo,
          title,
          date,
          content
        } : todo
      ),
      modiTodo: null
    })),

  setModiTodo: (todo) => set({
    modiTodo: todo
  }),

  resetModiTodo: () => set({
    modiTodo: null
  })

}))