import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Taskbar from './components/Taskbar'

function App() {
  let [inp,setInp]=useState("")
  let [todo,setTodo]=useState([])

  function handleChange(e){
    setInp(e.target.value);
  }

  function handleAdd(){
    if(inp!==""){
      setTodo((prev)=>[...prev,inp])
      setInp("")
    }else{
      alert("Add task")
    }
  }

  function handleDel(index){  
    setTodo(todo.filter((_,i)=>index!=i))
  }

  return(
    <>
      <main>
        <h1>📝 TaskTamer – A Clean & Functional React To-Do List</h1>
        <Taskbar input={handleChange} add={handleAdd} value={inp}/>
        <AddTask todos={todo} del={handleDel}/>
      </main>
    </>
  )
}

export default App
