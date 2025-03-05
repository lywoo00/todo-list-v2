import React from "react";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

function TodoCompleted() {
  const [toggleCompleted, setToggleCompleted] = useState(false);
  const toggleCompletedWork = () => {
    setToggleCompleted((prev) => !prev);
  };
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

      {toggleCompleted ? (
        <div className="flex items-start p-[10px] hover:bg-f1f1f1 rounded-basic">
          <button
            title="미완료 상태로 변경"
            className="text-gray-300 dark:text-gray-400 text-large hover:text-172b4d"
          >
            <BsCheck />
          </button>
          <div className="ml-[10px] w-full">
            <p className="text-default/[1.4] line-through">제목제목제목</p>
            <p className="text-666 mt-[6px]">내용내용내용내용내용내용내용</p>
            <span className="border inline-block rounded-basic text-xsmall/[1] px-[10px] py-[4px] mt-[6px] bg-white dark:bg-172b4d dark:text-gray-300">
              2024.2.28
            </span>
          </div>
          <button title="삭제" className="">
            <BsTrash />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default TodoCompleted;
