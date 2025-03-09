import SideBar from "../../components/SideBar/SideBar";
import TodoList from "../../components/TodoList/TodoList";
import DarkModeToggle from "../../components/DarkModeButton/DarkModeButton";
import AddPopup from "../../components/AddPopup/AddPopup";

function Main() {
  return (
    <div className="main flex dark:bg-172b4d">
      <SideBar />
      <TodoList />
      <DarkModeToggle />
      <AddPopup />
    </div>
  );
}

export default Main;
