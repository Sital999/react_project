import Headers  from './components/Header.js';
import Footer  from './components/Footer.js';
import About  from './components/About.js';
import{BrowserRouter as Router , Route} from 'react-router-dom'

import Task from './components/Tasks.js';
import { useState,useEffect } from "react"
import AddTask from './components/AddTask.js';


function App() {

  const[showAdd,setShowAdd]=useState(false)
  const[tasks, setTasks] = useState([ ])   

  useEffect(()=>{
   const getTask= async ()=>{
    const tasKFromServer = await fetchTasks();
    setTasks(tasKFromServer)
   };
    getTask()
  },[])

// fetch tasks
const fetchTasks= async ()=>{
  const res= await fetch ('http://127.0.0.1:3000/tasks');
  const data= await res.json();
  return data;
}

// fetch task 
const fetchTask= async (id)=>{
  const res= await fetch (`http://127.0.0.1:3000/tasks/${id}`);
  const data= await res.json();
  return data;
}



// adiing tasks
const addTask = async(task) => {
    // const id =Math.floor(Math.random() * 1000000);
  
  // const newTask={id, ...task}
    
  // setTasks([...tasks, newTask])
  const res = await fetch('http://127.0.0.1:3000/tasks',{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(task)
  });
  const data= await res.json();
  setTasks([...tasks,data])

}

// deleting task
const deleteTask = async(id) => {
  await fetch(`http://127.0.0.1:3000/tasks/${id}`,{
    method: 'DELETE'
  })
    setTasks(tasks.filter(task => task.id !== id))
}

// toggling reminder
const toggleReminder=async(id) => {
  const taskToToggle= await fetchTask(id);
  const updTask= {...taskToToggle,reminder:!taskToToggle.reminder} 
  const res= await fetch (`http://127.0.0.1:3000/tasks/${id}`,{
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(updTask)
  })
  const data= await res.json();

setTasks(tasks.map((task)=>
task.id===id?{...task,reminder:data.reminder}:task))

}

  return (
    <Router>
    <div className="container">
    <Headers addbtn={()=>setShowAdd(!showAdd)} showAddButton={showAdd} />

     
   
     <Route path='/' exact render={(props)=>(
       <>
       
        {showAdd && <AddTask addTasks={addTask} />}
      {tasks.length>0?
      (<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  /> )
      :('No tasks')} 
       </>
     )}/>
      <Route path='/about' component={About}/>
      <Footer/>
    </div>
    </Router>
  );
}



export default App;
