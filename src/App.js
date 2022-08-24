import Header from "./Components/Header";
import TaskContainer from "./Components/TaskContainer";
import data from './data.json'
import {useState, useEffect} from 'react'
import Form from "./Components/Form";

function App() {

  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState({})

  //GET
  const fetchData = () => {
    return fetch('http://localhost:9292/todos')
    .then((response) => response.json())
    .then((dataAPI) => {
      setTasks([...dataAPI])
    })
  }
  
  useEffect(() => {
    fetchData()
  }, [])


  //POST
  function handleAdd(obj){
    fetch('http://localhost:9292/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    })
    .then(r => r.json())
    .then(data =>setTasks([...tasks, data]))
  }

  //DELETE
  function handleDelete(id){
    fetch(`http://localhost:9292/todos/${id}`, {
      method: "DELETE",
    })
    .then(r =>r.json())
    .then(() => setTasks(tasks.filter(task=>task.id !== id)))
  }


  return(
    <div className="App">
      <Header />
      <Form handleAdd={handleAdd} />
      <TaskContainer setEditTask={setEditTask} tasks={tasks} handleDelete={handleDelete} />
    </div>
)}

export default App;
