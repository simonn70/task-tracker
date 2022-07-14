import React from 'react'
import Task from './Task'
 
const Tasks = ({task,onToggle,onDelete}) => {
  return (
   
     
     
       task.map((task)=>(<Task   onDelete={onDelete} onToggle={onToggle} key={task.id} text={task}/>))
     
     
   
  )
}

export default Tasks  