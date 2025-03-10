import SideBar from "../../components/SideBar/SideBar";
import TodoList from "../../components/TodoList/TodoList";
import DarkModeToggle from "../../components/DarkModeButton/DarkModeButton";
import AddPopup from "../../components/AddPopup/AddPopup";

function Main() {
  return (
    <>
      <div className="flex dark:bg-172b4d relative">
        <SideBar />
        <TodoList />
        <DarkModeToggle />
        <AddPopup />
      </div>
    </>
  );
}

export default Main;
