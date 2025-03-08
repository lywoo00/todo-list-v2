import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
// import { BsStarFill } from "react-icons/bs";
import { usePopupStore } from "../../store/usePopup";
import { useTodoStore } from "../../store/useTodo";

function SideBar() {
  const { openPopup } = usePopupStore();
  const { resetModiTodo } = useTodoStore();

  const openAddPopup = () => {
    resetModiTodo();
    openPopup();
  };

  const setImportantTodo = useTodoStore((state) => state.setImportantTodo);
  const setAllTodo = useTodoStore((state) => state.setAllTodo);

  return (
    <div className="w-[236px] h-lvh bg-white dark:bg-gray-300 p-[20px]">
      <h1 className="text-xxlarge text-center">할 일</h1>
      <button
        className="flex py-[20px] px-[30px] rounded-basic shadow-sm mt-[30px] hover:bg-f1f1f1 dark:hover:bg-172b4d dark:hover:text-white"
        onClick={() => openAddPopup()}
      >
        <p>+</p>
        <p className="ml-[4px] bg-mint-500">만들기</p>
      </button>
      <button
        className="flex curso r-pointer py-[5px] px-[10px] items-center w-[100%] mt-[30px] hover:bg-172b4d hover:text-white rounded-[100px]"
        onClick={() => setAllTodo()}
      >
        <BsCheckCircle />
        <p className="ml-[10px] text-left ">모든 할 일</p>
      </button>
      <button
        className="flex py-[5px] px-[10px] items-center w-[100%] mt-[10px] hover:bg-172b4d hover:text-white rounded-[100px]"
        onClick={() => setImportantTodo()}
      >
        <BsStar />
        <p className="ml-[10px] text-left">중요한 일</p>
      </button>
    </div>
  );
}

export default SideBar;
