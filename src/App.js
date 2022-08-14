import Header from "./Components/Header";
import TaskContainer from "./Components/TaskContainer";
import data from './data.json'
import {useState, useEffect} from 'react'
import Form from "./Components/Form";

function App() {

  const [tasks, setTasks] = useState([])
  const [editTask, seteditTask] = useState({})

  //GET
  const fetchData = () => {
    return fetch('http://localhost:9292/todos')
    .then((response) => response.json())
    .then((dataAPI) => {
      setTasks([...dataAPI])
    })
  }
  //clear edit task obj
  //update state to reflect new changes in form
  //send patch
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

  //PATCH
  // function handleEdit(id, update){
  //   fetch(`http://localhost:9292/todos/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       taskname: update
  //     }),
  //   })
  //   .then(r=>r.json())
  //   .then(() => setTasks(tasks))
  // }



  return(
    <div className="App">
      <Header />
      <Form handleAdd={handleAdd} />
      <TaskContainer seteditTask={seteditTask} tasks={tasks} handleDelete={handleDelete} />
    </div>
)}

export default App;
