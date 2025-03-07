import React from "react";
import { useState } from "react";
import { useTodoStore } from "../../store/useTodo";
import { BsCheck, BsTrash, BsChevronUp, BsChevronDown } from "react-icons/bs";

interface Todo {
  id: number;
  title: string;
  date: string;
  content: string;
  isImportant: boolean;
  isCompleted: boolean;
}
const TodoCompleted: React.FC = () => {
  const [toggleCompleted, setToggleCompleted] = useState(false);
  const toggleCompletedWork = () => {
    setToggleCompleted((prev) => !prev);
  };

  const { completedTodos } = useTodoStore();
  const removeCompletedTodo = useTodoStore(
    (state) => state.removeCompletedTodo
  );

  return (
    <div className="mt-[20px]">
      <button
        className="flex items-center mb-[10px]"
        onClick={() => {
          toggleCompletedWork();
        }}
      >
        <p className="text-small/[1.4] mr-[10px]">완료된 일</p>
        {toggleCompleted ? <BsChevronUp /> : <BsChevronDown />}
      </button>

      {toggleCompleted
        ? completedTodos.map((todo: Todo) => (
            <div className="flex items-start p-[10px] hover:bg-f1f1f1 rounded-basic">
              <button
                title="미완료 상태로 변경"
                className="text-gray-300 dark:text-gray-400 text-large hover:text-172b4d"
              >
                <BsCheck />
              </button>
              <div className="ml-[10px] w-full">
                <p className="text-default/[1.4] line-through">{todo.title}</p>
                <p className="text-666 mt-[6px]">{todo.content}</p>
                <span className="border inline-block rounded-basic text-xsmall/[1] px-[10px] py-[4px] mt-[6px] bg-white dark:bg-172b4d dark:text-gray-300">
                  {todo.date}
                </span>
              </div>
              <button
                title="삭제"
                className=""
                onClick={() => removeCompletedTodo(todo.id)}
              >
                <BsTrash />
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default TodoCompleted;
