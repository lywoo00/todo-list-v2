import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

function SideBar() {
  return (
    <>
    <div className='w-[236px] h-lvh bg-white p-[20px]'>
      <h1 className='text-[22px] text-center'>할 일</h1>
      <button className='flex cursor-pointer py-[20px] px-[30px] rounded-[10px] shadow-sm mt-[30px] hover:bg-[#f1f1f1]'>
        <p>+</p>
        <p className='ml-[4px]'>만들기</p>
      </button>
      <button className='flex cursor-pointer py-[5px] px-[10px] items-center w-[100%] mt-[30px] hover:bg-[#172b4d] hover:text-[#fff] rounded-[100px]'>
        <BsCheckCircle />
        <p className='ml-[10px]'>모든 할 일</p>
      </button>
      <button className='flex cursor-pointer py-[5px] px-[10px] items-center w-[100%] mt-[10px] hover:bg-[#172b4d] hover:text-[#fff] rounded-[100px]'>
        <BsStar />
        <p className='ml-[10px]'>중요한 일</p>
      </button>
    </div>
    </>
  )
}

export default SideBar