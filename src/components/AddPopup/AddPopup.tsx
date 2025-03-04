import React from 'react'
import './AddPopup.css'
import { BsXLg } from "react-icons/bs";

const AddPopup = () => {
  
  return (
    <div className='add-pop fixed z-[10] w-lvw h-lvh before:content-[""]  before:absolute before:w-full before:h-full before:bg-black before:opacity-[0.3] before:z-[-1] flex items-center justify-center'>
      <div className='relative bg-white w-[500px] max-w-[500px] p-[20px] pt-[40px] rounded-[10px]'>
        <form action="">
          <input type="text" placeholder='제목을 입력하세요' className='border-b w-full text-[20px] py-[10px]'/>
          <div className='flex mt-[30px]'>
            <label htmlFor="date" className='mr-[20px]'>시간</label>
            <input type="date" id='date' className='bg-[#f1f1f1] py-[9px] px-[7px] text-[#666] rounded-[10px]'/>
          </div>
          <div className='flex mt-[30px]'>
            <label htmlFor="content" className='mr-[20px]'>내용</label>
            <textarea name="content" id="content" placeholder='내용 입력' className='p-[10px] bg-[#f1f1f1] text-[#666] rounded-[10px] grow min-h-[150px]' draggable="false"></textarea>
          </div>
          <div className='text-right mt-[30px]'>
            <button type='submit' className='bg-[#f1f1f1] rounded-[10px] text-[20px] py-[10px] px-[30px]'>저장</button>
          </div>
        </form>
        <button className='absolute top-[20px] right-[20px]'>
          <BsXLg className='text-[20px]'/>
        </button>
      </div>
    </div>
  )
}

export default AddPopup
