import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [taskValues, setTaskValues] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(data => setTaskValues(data))
  }, [])

  function handleDelete(id) {
    const removeTask = taskValues.filter((task) => task.id !== id)
    setTaskValues(removeTask)
    {fetch('http://localhost:3000/tasks/' + id, {
      method: 'DELETE'
    })}
  }


 const onAddTask = (newTask) => {
  setTaskValues([...taskValues, newTask])
 }

 return (
   <div className="App">
      <div className="Screen">
          <NavBar handleDelete={handleDelete} onAddTask={onAddTask} taskValues={taskValues} /> 
      </div>
    </div>
  );
}

export default App
