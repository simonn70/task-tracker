import React from 'react'
import {FaTimes} from 'react-icons/fa'
 
 const Task = ({text,onDelete,onToggle}) => {
   return (
     <div onDoubleClick={()=>onToggle(text.id)} className={`task ${text.reminder? 'reminder': ''}`}>
       <h3>{text.text} <FaTimes onClick={()=> onDelete(text.id)}/> </h3>
       <p>{text.day}</p>
     </div>
   )
 }
 
 export default Task