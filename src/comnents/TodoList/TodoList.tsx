import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

function TodoList() {
  return (
    <>
      <div className='w-[100%] px-[20px]'>
        <div className='bg-white p-[20px] max-w-[684px] mx-auto rounded-[10px] mt-[170px]'>
          <h3 className='text-[22px]'>내 할 일 목록</h3>
          <div className='mt-[20px]'>
            <button className='text-[20px] flex items-center font-bold cursor-pointer'>
              <div className='hover:text-[#fff] hover:bg-[#172b4d] rounded-[50%] p-[2px]'>
                <BsCheckCircle  className=''/>
              </div>
              <p className='ml-[10px] text-[18px]'>전체 완료</p>
            </button>
            {/* 아이템[S] */}
            <div className='flex items-start p-[10px] hover:bg-[#f1f1f1] rounded-[10px]'>
              <button title='완료 체크' className='text-gray-300 text-[20px] hover:text-[#172b4d] cursor-pointer'>
                <BsCheck />
              </button>
              <div className='ml-[10px] w-[100%]'>
                <p className='text-[16px]/[1.4]'>제목제목제목</p>
                <p>내용내용내용내용내용내용내용</p>
                <button>2024.2.28</button>
              </div>
              <div className='flex'>
              <BsTrash className='cursor-pointer'/>
              <BsStar className='ml-[10px] cursor-pointer'/>
              </div>
            </div>
            {/* 아이템[E] */}
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList