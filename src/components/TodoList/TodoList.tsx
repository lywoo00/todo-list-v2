import React from 'react'
import { useState } from 'react';
import { BsCheckCircle } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";


function TodoList() {
  const [toggleCompleted, setToggleCompleted] = useState(false)
  const toggleCompletedWork = () =>{
    setToggleCompleted(prev => !prev)
  }
  const [fullOptionTooltip,setFullOptionTooltip] = useState(false)
  const toggleFullOptionTooltip = () =>{
    setFullOptionTooltip(prev => !prev)
  }

  return (
    <>
      <div className='w-full px-[20px]'>
        {/* white box[S] */}
        <div className='bg-white dark:bg-gray-300 p-[20px] max-w-[684px] mx-auto rounded-[10px] mt-[170px]'>
          <div className='flex items-center justify-between'>
            <h3 className='text-[22px]'>내 할 일 목록</h3>
            <div className='relative'>
              <button title='전체 할 일 옵션' onClick={()=>toggleFullOptionTooltip()} className=''>
                 <BsThreeDotsVertical className=''/> 
              </button>
              {fullOptionTooltip ?
              <div className='absolute w-[200px] bg-white shadow-sm px-[20px] py-[10px] rounded-[10px] top-[100%] right-0'>
                <button className='flex w-full items-center py-[10px] border-b border-[#dfdfdf]'>
                  <BsTrash/>
                  <p className='ml-[5px]'>전체 할 일 삭제</p>
                </button>
                <button className='flex w-full items-center py-[10px]'>
                  <BsStarFill/>
                  <p className='ml-[5px]'>중요한 일 보기</p>
                </button>
              </div>
              : null}
            </div>
          </div>
          <div className='mt-[20px]'>
            <button className='group text-[20px] flex items-center font-bold '>
              <div className='p-[2px]'>
                <BsCheckCircle  className='group-hover:hidden'/>
                <BsCheckCircleFill  className='hidden group-hover:block'/>
              </div>
              <p className='ml-[10px] text-[18px]'>전체 완료</p>
            </button>
            {/* 아이템[S] */}
            <div className='flex items-start p-[10px] hover:bg-[#f1f1f1] rounded-[10px]'>
              <button title='완료 체크' className='text-gray-300 dark:text-gray-400 text-[20px] hover:text-[#172b4d]  '>
                <BsCheck />
              </button>
              <div className='ml-[10px] w-full'>
                <p className='text-[16px]/[1.4]'>제목제목제목</p>
                <p className='text-[#666] mt-[6px]'>내용내용내용내용내용내용내용</p>
                <span className='border inline-block rounded-[10px] text-[12px]/[1] px-[10px] py-[4px] mt-[6px] bg-white dark:bg-[#172b4d] dark:text-gray-300'>2024.2.28</span>
              </div>
              <div className='flex'>
                <button title='중요' className='group '>
                  <BsStar className='group-hover:hidden '/>
                  <BsStarFill className='hidden group-hover:block' />
                </button>
                <button className='ml-[10px] '>
                  <BsThreeDotsVertical title='할 일 옵션'/>
                </button>
              </div>
            </div>
            
            {/* 아이템[E] */}
          </div>
          {/* 완료된 일[S] */}
          <div className='mt-[20px]'>
            <button className='flex items-center ' onClick={()=>{toggleCompletedWork()}}>
              <p className='text-[14px]/[1.4] mr-[10px]'>완료된 일</p>
              {toggleCompleted ? <BsChevronUp /> : <BsChevronDown /> }
            </button>

            {toggleCompleted ? 
              <div className='flex items-start p-[10px] hover:bg-[#f1f1f1] rounded-[10px]'>
              <button title='미완료 상태로 변경' className='text-gray-300 dark:text-gray-400 text-[20px] hover:text-[#172b4d]  '>
                <BsCheck />
              </button>
              <div className='ml-[10px] w-full'>
                <p className='text-[16px]/[1.4] line-through'>제목제목제목</p>
                <p className='text-[#666] mt-[6px]'>내용내용내용내용내용내용내용</p>
                <span className='border inline-block rounded-[10px] text-[12px]/[1] px-[10px] py-[4px] mt-[6px] bg-white dark:bg-[#172b4d] dark:text-gray-300'>2024.2.28</span>
              </div>
              <button title='삭제' className=''>
              <BsTrash/>
              </button>
            </div> : null
          }
          
          </div>
        </div>
        {/* white box[E] */}
      </div>
    </>
  )
}

export default TodoList