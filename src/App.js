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

  function handleAdd(e){
    fetch('http://localhost:9292/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "taskName": e,
        "completed": false
      })
    })
    .then(r => r.json())
    .then(data =>setTasks([...tasks, data]))
  }



  return(
    <div className="App">
      <Header />
      <Form handleAdd={handleAdd}/>
      <TaskContainer tasks={tasks}/>
    </div>
)}

export default App;
