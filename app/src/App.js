import React, { useState } from "react";
import Tasks from "./components/Tasks"  
import Header from "./components/Header";
import AddTask from "./components/AddTask";

import "./App.css"


const App = () => {
  const [tasks,setTasks]=useState([{
    id:1,
    text:'food',
    day: '5th january',
    reminder: false, 

  },
 {
  id:2,
  text:'drinks',
  day: '5th january',
  reminder: false, 
 },
 {
  id:3,
  text:'pasteries',
  day: '5th january',
  reminder: false,
 }
])
const [showAdd,setShowAdd]=useState(false)

//deleting tasks
 const onDelete=(id)=>{
 setTasks(tasks.filter((task)=> task.id!==id))
 }

 const onToggle=(id)=>{
 setTasks(tasks.map((task)=> task.id===id? {...task,reminder: !task.reminder} : task)) 

 }
 const addTask=(task)=>{
   const id = Math.floor(Math.random()*10000)+1
   const newTask={id,...task}
  
setTasks([...tasks,newTask])
 }

  return (
    
  <div className="container">
    <Header showAdd={showAdd} onAdd={()=>setShowAdd(!showAdd)}/>
    {showAdd && < AddTask onAdd={addTask}/>}
    {tasks.length>0? (<Tasks onToggle={onToggle} task={tasks} onDelete={onDelete}/>) : 'no tasks to show'}
    
  </div>
  )
}

export default App