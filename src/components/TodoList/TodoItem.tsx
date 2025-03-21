// import React, { useState } from "react";
import {
  BsCheck,
  BsTrash,
  BsStar,
  BsStarFill,
  BsThreeDotsVertical,
  BsPencil,
} from "react-icons/bs";
import { useTodoStore } from "../../store/useTodo";
import { usePopupStore } from "../../store/usePopup";

interface Todo {
  id: string;
  title: string;
  date: string;
  content: string;
  isImportant: boolean;
  isCompleted: boolean;
}

interface TodoItemProps {
  todo: Todo;
  openTooltipId: string | null;
  toggleTooltip: (id: string) => void;
  setOpenTooltipId: (id: string | null) => void;
  // toggleImportant: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  openTooltipId,
  toggleTooltip,
  setOpenTooltipId,
}) => {
  const { deleteTodo, setModiTodo, toggleImportantTodo, setCompletedTodo } =
    useTodoStore();
  const { openPopup } = usePopupStore();
  const openModiPopup = () => {
    setModiTodo(todo);
    openPopup();
    setOpenTooltipId(null);
  };

  return (
    <div className="flex items-start p-[10px] hover:bg-f1f1f1 rounded-basic">
      <button
        title="완료 체크"
        className="text-gray-300 dark:text-gray-400 text-xlarge hover:text-defualt group"
        onClick={() => setCompletedTodo(todo)}
      >
        <BsCheck className="group-hover:text-172b4d" />
      </button>
      <div className="ml-[10px] w-full">
        <p className="text-default/[1.4]">{todo.title}</p>
        <p className="text-666 mt-[6px]">{todo.content}</p>
        <span className="border inline-block rounded-basic text-xsmall/[1] px-[10px] py-[4px] mt-[6px] bg-white dark:bg-172b4d dark:text-gray-300">
          {todo.date}
        </span>
      </div>
      <div className="flex">
        <button title="중요" onClick={() => toggleImportantTodo(todo)}>
          {todo.isImportant ? <BsStarFill /> : <BsStar />}
        </button>
        <div className="relative ml-[10px]">
          <button className="block" onClick={() => toggleTooltip(todo.id)}>
            <BsThreeDotsVertical title="할 일 옵션" />
          </button>
          {openTooltipId === todo.id && (
            <div className="absolute w-[200px] bg-white shadow-sm px-[20px] py-[10px] rounded-basic top-[100%] right-0 z-10">
              <button
                className="flex w-full items-center py-[10px] border-b border-[#dfdfdf]"
                onClick={() => openModiPopup()}
              >
                <BsPencil />
                <p className="ml-[5px]">할 일 수정</p>
              </button>
              <button
                className="flex w-full items-center py-[10px]"
                onClick={() => deleteTodo(todo)}
              >
                <BsTrash />
                <p className="ml-[5px]">할 일 삭제</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
