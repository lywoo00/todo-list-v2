import React from "react";
import { useState } from "react";
import { useTodoStore } from "../../store/useTodo";
import TodoItem from "./TodoItem";
import TodoCompleted from "./TodoCompleted";
import { BsCheckCircle } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsTrash, BsStarFill, BsThreeDotsVertical } from "react-icons/bs";

interface Todo {
  id: number;
  title: string;
  date: string;
  content: string;
  // isComplted: boolean;
  // isImportant: boolean;
}

const TodoList: React.FC = () => {
  const [fullOptionTooltip, setFullOptionTooltip] = useState<boolean>(false);
  const toggleFullOptionTooltip = () => {
    setFullOptionTooltip((prev) => !prev);
    setOpenTooltipId(null);
  };

  const todos = useTodoStore((state) => state.todos);

  const [openTooltipId, setOpenTooltipId] = useState<number | null>(null);
  const toggleTooltip = (id: number) => {
    setOpenTooltipId((prevId) => (prevId === id ? null : id));
    setFullOptionTooltip(false);
  };

  return (
    <>
      <div className="w-full px-[20px]">
        {/* white box[S] */}
        <div className="bg-white dark:bg-gray-300 p-[20px] max-w-[684px] mx-auto rounded-basic mt-[170px]">
          <div className="flex items-center justify-between">
            <h3 className="text-xxlarge">내 할 일 목록</h3>
            <div className="relative">
              <button
                title="전체 할 일 옵션"
                onClick={() => toggleFullOptionTooltip()}
                className=""
              >
                <BsThreeDotsVertical className="" />
              </button>
              {fullOptionTooltip ? (
                <div className="absolute w-[200px] bg-white shadow-sm px-[20px] py-[10px] rounded-basic top-[100%] right-0 z-11">
                  <button className="flex w-full items-center py-[10px] border-b border-[#dfdfdf]">
                    <BsTrash />
                    <p className="ml-[5px]">전체 할 일 삭제</p>
                  </button>
                  <button className="flex w-full items-center py-[10px]">
                    <BsStarFill />
                    <p className="ml-[5px]">중요한 일 보기</p>
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div className="mt-[20px]">
            <button className="group text-xlarge flex items-center font-bold ">
              <div className="p-[2px]">
                <BsCheckCircle className="group-hover:hidden" />
                <BsCheckCircleFill className="hidden group-hover:block" />
              </div>
              <p className="ml-[10px] text-large">전체 완료</p>
            </button>
            {/* 할 일 아이템[S] */}
            {todos.map((todo: Todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                openTooltipId={openTooltipId}
                toggleTooltip={toggleTooltip}
                setOpenTooltipId={setOpenTooltipId}
              />
            ))}
            {/* 할 일 아이템[E] */}
          </div>

          {/* 완료된 일[S] */}
          <TodoCompleted />
          {/* 완료된 일[E] */}
        </div>
        {/* white box[E] */}
      </div>
    </>
  );
};

export default TodoList;
