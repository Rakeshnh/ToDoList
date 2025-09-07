import React,{useState} from 'react'
import axios from "axios";


const Input = ({addTask}) => {
    const [task, setTask]=useState("");

const API=import.meta.env.VITE_API_BASE_URL;
const handleTask=async(e)=>{
    e.preventDefault();
   
    try{
         if(!task.trim()) return;
        const response=await axios.post("http://localhost:5000/submit",{
            text:task,
            completed:false,
        });
        addTask(response.data);
        setTask("");
    }catch(error){
        console.error(
            "error submitting form:",
            error.response?.data || error.message
        );
    }
     };





  return (
    <div>
        <form onSubmit={handleTask}>
            <input type="text" placeholder="enter task here" value={task} onChange={(e)=>setTask(e.target.value)}>
            </input>
            <button type="submit">Add Task</button>

        </form>
      
    </div>
  )
}

export default Input
