import Header from "./Components/Header";
import TaskContainer from "./Components/TaskContainer";
import data from './data.json'
import {useState, useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([data])

  const fetchData = () => {
    return fetch('https://localhost:9292')
    .then((response) => response.json())
    .then((dataAPI) => {
      setTasks([dataAPI])
    })
  }

  useEffect(() => {
    fetchData()
   }, [])

  return(
    <div className="App">
      <Header />
      <TaskContainer tasks={tasks}/>
    </div>
)}

export default App;
