import React from 'react'

function SideBar() {
  return (
    <div className='side-bar w-[236px]'>
        <h1 className='text-[22px] font-bold'>Todo List</h1>
        <button className='add-btn'>
            <i><img src="" alt="" /></i>
            <p>만들기</p>
        </button>
        <div className='filter-btns'>
            <button className='all'></button>
            <button className='important'></button>
        </div>
    </div>
  )
}

export default SideBar