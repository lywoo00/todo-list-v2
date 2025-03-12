import React, { useState, useEffect } from "react";
import { BsXLg } from "react-icons/bs";
import { usePopupStore } from "../../store/usePopup";
import { useTodoStore } from "../../store/useTodo";
import { db } from "../../firebaseApp";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { auth } from "../../firebaseApp";

const AddPopup: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { modiTodo, getTodos } = useTodoStore();
  const today = new Date().toISOString().split("T")[0];

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

    console.log("modiTodo", modiTodo);
  }, [modiTodo]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      if (!modiTodo) {
        setTitle("");
        setDate("");
        setContent("");
        await addDoc(collection(db, "todos"), {
          title: title,
          content: content,
          date: date,
          isCompleted: false,
          isImportant: false,
          email: auth.currentUser?.email,
        });
        if (getTodos) await getTodos();
        closePopup();
      } else {
        // modifyTodo(modiTodo.id, title, date, content);
        const TodoRef = doc(db, "todos", modiTodo.id);
        await updateDoc(TodoRef, {
          title: title,
          content: content,
          date: date,
        });
        getTodos();
        closePopup();
      }
    } catch (error) {
      alert(error);
    }
    console.log("modiTodo", modiTodo);
  };

  const { isOpen, closePopup } = usePopupStore();

  if (!isOpen) return null;
  return (
    <div className='add-pop fixed z-[99] w-lvw h-lvh before:content-[""]  before:absolute before:w-full before:h-full before:bg-black before:opacity-[0.3] before:z-[-1] flex items-center justify-center'>
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
            required
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
                if (today > e.target.value) {
                  alert("지난 날짜는 선택할 수 없습니다.");
                  return;
                }
                setDate(e.target.value);
              }}
              required
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
              required
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
