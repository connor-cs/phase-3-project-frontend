import Header from "./Components/Header";
import TaskContainer from "./Components/TaskContainer";
import data from './data.json'
import {useState, useEffect} from 'react'
import Form from "./Components/Form";

function App() {

  const [tasks, setTasks] = useState([])

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

  function handleDelete(id){
    fetch(`http://localhost:9292/todos/${id}`, {
      method: "DELETE",
    })
    .then(r =>r.json())
    .then(data => setTasks(tasks.filter(task=>task.id !== id)))
  }




  return(
    <div className="App">
      <Header />
      <Form handleAdd={handleAdd}/>
      <TaskContainer tasks={tasks} handleDelete={handleDelete}/>
    </div>
)}

export default App;
