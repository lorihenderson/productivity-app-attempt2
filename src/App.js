import './App.css';
import Form from './components/Form'
import React, { useEffect, useState } from 'react';

function App() {


  const [taskValue, setTaskValue] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
        .then(response => response.json())
        .then(data => setTaskValue(data))
  }, [])

  // const onAddTask = (newTaskValue) => {
    
  //   setTaskValue([...taskValue, newTaskValue])
    
  // }

  return (
    <div className="App">
          <Form />
    </div>
  );
}

export default App;
