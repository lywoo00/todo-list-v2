// import './App.css'
import SideBar from './comnents/SideBar/SideBar'
import TodoList from './comnents/TodoList/TodoList'
import DarkModeToggle from './comnents/DarkModeButton/DarkModeButton'
import './css/tailwindcss/tailwind.css'

function App() {

  return (
    <div className='main flex dark:bg-[#172b4d]'>
      <SideBar />
      <TodoList />
      <DarkModeToggle />
    </div>
  )
}

export default App
