import './App.css'
import SideBar from './comnents/SideBar/SideBar'
import TodoList from './comnents/TodoList/TodoList'
import './css/tailwindcss/tailwind.css'

function App() {

  return (
    <div className='main flex'>
      <SideBar />
      <TodoList />
    </div>
  )
}

export default App
