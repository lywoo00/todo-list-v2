import React, { useState, useEffect } from "react";
import { BsXLg } from "react-icons/bs";
import { usePopupStore } from "../../store/usePopup";
import { useTodoStore } from "../../store/useTodo";

const AddPopup = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const motdifyTodo = useTodoStore((state) => state.motdifyTodo);
  const { todos, modiTodo } = useTodoStore();

  useEffect(() => {
    if (modiTodo) {
      setTitle(modiTodo.title);
      setContent(modiTodo.content);
      setDate(modiTodo.date);
    } else {
      setTitle("");
      setContent("");
      setDate("");
    }
  }, [modiTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !content) {
      alert("항목을 모두 입력 해주세요");
      return;
    }
    if (!modiTodo) {
      addTodo(title, date, content);
      setTitle("");
      setDate("");
      setContent("");
      closePopup();
    } else {
      motdifyTodo(modiTodo.id, title, date, content);
      closePopup();
    }
  };

  const { isOpen, closePopup } = usePopupStore();

  if (!isOpen) return null;
  return (
    <div className='add-pop fixed z-[10] w-lvw h-lvh before:content-[""]  before:absolute before:w-full before:h-full before:bg-black before:opacity-[0.3] before:z-[-1] flex items-center justify-center'>
      <div className="relative bg-white w-[500px] max-w-[500px] p-[20px] pt-[40px] rounded-basic">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className="border-b w-full text-[20px] py-[10px]"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className="flex mt-[30px]">
            <label htmlFor="date" className="mr-[20px]">
              시간
            </label>
            <input
              type="date"
              id="date"
              className="bg-[#f1f1f1] py-[9px] px-[7px] text-[#666] rounded-[10px]"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="flex mt-[30px]">
            <label htmlFor="content" className="mr-[20px]">
              내용
            </label>
            <textarea
              name="content"
              id="content"
              placeholder="내용 입력"
              className="p-[10px] bg-[#f1f1f1] text-[#666] rounded-[10px] grow min-h-[150px]"
              draggable="false"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="text-right mt-[30px]">
            <button
              type="submit"
              className="bg-[#f1f1f1] rounded-[10px] text-[20px] py-[10px] px-[30px]"
            >
              저장
            </button>
          </div>
        </form>
        <button
          className="absolute top-[20px] right-[20px]"
          onClick={closePopup}
        >
          <BsXLg className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default AddPopup;
