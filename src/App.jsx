
import './App.css'
import { useState } from 'react';
function App() {
    const [tasks,setTasks]=useState(["Eat","Sleep"])
    const [newTask,setNewTask] = useState("");

    function addTask(){
      if(newTask.trim() !== ""){
        setTasks((prev)=>[...prev,newTask]);
        setNewTask("");
      }
    }

    function handleInputChange(event){
      setNewTask(event.target.value);
    }

    function deleteTask(index){
      const newArray = tasks.filter((_,i) => i !== index);
      setTasks(newArray)
    }
  return (
    <>
      <div className = "todo-container">
      <h1>To do List</h1>
      <div className="input-container">
        <input id="inputTask" type="text" onChange = {handleInputChange} value={newTask} placeholder="Enter a Task..."></input>
        <button onClick = {addTask}>Add Task</button>
      </div>

      <div className = "tasks-container">
        <h2>Tasks</h2>
        <ul>
          {
            tasks.map((task,index)=>(
              <li>
                <h4>{task}</h4>
                <button onClick={()=>deleteTask(index)}>Delete</button>
              </li>
            )) 
          }
        </ul>
      </div>
      </div>
    </>
  )
}

export default App
