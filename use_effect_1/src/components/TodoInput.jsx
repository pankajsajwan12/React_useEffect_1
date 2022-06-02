import React, { useState } from "react";

 const TodoInput = ({ addTodo})=>{
     const [value, setValue]= useState("");
     return (
         <div>
             <input 
             type="text"
             value={value}
              placeholder="Write Somenthing......" 
              onChange={(e)=>{setValue(e.target.value)}}
              />
              <button
              onClick={()=>{
                console.log(value);
                addTodo(value);
                setValue("");
              }}>Save</button>
         </div>
     )
 }

 export default TodoInput;