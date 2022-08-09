import Header from "./Components/Header";
import TaskContainer from "./Components/TaskContainer";
import data from './data.json'
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([data])

  return(
    <div>
      <Header />
      <TaskContainer tasks={tasks}/>
    </div>
)}

export default App;
