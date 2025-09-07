import React,{useEffect,useState} from 'react'
import Output from './Output'
import Input from './input'
import axios from "axios";

const Manager = () => {
    const[tasks,setTasks]=useState([]);

    const fetchTasks = async () => {
  try {
    const response = await axios.get("http://localhost:5000/tasks");
    setTasks(response.data); // no need for JSON.parse
  } catch (error) {
    console.error("error fetching tasks:", error.message);
    setTasks([]);
  }
};
    useEffect(()=>{
        fetchTasks();
    },[]);

    const onAddTask=(task)=>{
        console.log("ADD TASK RECEIVED:",task);
        if(!task || !task.text || !task.text.trim())return;
        setTasks((prev)=>[...prev,task]);
    };

    const handleToggle=async(id)=>{
        try{
            const response=await axios.patch(
              `http://localhost:5000/tasks/${id}/toggle`  
            );
            setTasks((prev)=>
                prev.map((task)=>(task._id === id ? response.data:task))
            );
        }catch(error){
            console.error("error toggling task:",error.message);
        }
    };
    const handleDelete=async(id)=>{
        try{
            await axios.delete(`http://localhost:5000/tasks/${id}`);
            setTasks((prev)=>prev.filter((task)=>task._id !==id));
        }catch(error){
            console.error("error deleting task:",error.message);
        }
    };




  return (
    <div>
        <Input addTask={onAddTask}/>
        <Output tasks={tasks} onToggle={handleToggle} onDelete={handleDelete}/>
      
    </div>
  )
}

export default Manager
