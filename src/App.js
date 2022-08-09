import Header from "./Components/Header";
import TaskContainer from "./Components/TaskContainer";
import data from './data.json'
import {useState, useEffect} from 'react'

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

  function handleAddTask(e){
    fetch('http://localhost:9292/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id": null,
        "taskName": e.target.value,
        "completed": false
      })
    })
    .then()
  }

  return(
    <div className="App">
      <Header handleAdd={handleAddTask}/>
      <TaskContainer tasks={tasks}/>
    </div>
)}

export default App;
