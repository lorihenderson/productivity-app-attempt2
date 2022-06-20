import './App.css';
import Form from './components/Form'
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Monday from './components/Monday'
import Tuesday from './components/Tuesday'
import Wednesday from './components/Wednesday'
import Thursday from './components/Thursday'
import Friday from './components/Friday'
import Saturday from './components/Saturday'
import Sunday from './components/Sunday'
import { Switch, Route } from "react-router-dom";




function App() {


  const [taskValues, setTaskValues] = useState([])

  
  useEffect(() => {
    fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(data => setTaskValues(data))
  }, [])
 
  
 const onAddTask = (newTask) => {
  setTaskValues([...taskValues, newTask])
 }

 
 return (
   <div className="App">
      <div className="Screen">
          <NavBar />
          <Form onAddTask={onAddTask}/>

          <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/Monday">
          <Monday />
        </Route>
        <Route exact path="/Tuesday">
          <Tuesday />
        </Route>
        <Route path="/Wednesday">
          <Wednesday />
        </Route>
        <Route path="/Thursday">
          <Thursday />
        </Route>
      </Switch>

          {taskValues.map((task) => {
          if (task.day === Monday) {
            return <Monday key={task.id} task={task}/>
          }
          else if (task.day === Tuesday) {
            return <Tuesday key={task.id} task={task}/>
          }
          else if (task.day === Wednesday) {
            return <Wednesday key={task.id} task={task}/>
          }
          else if (task.day === Thursday) {
            return <Thursday key={task.id} task={task}/>
          }
          else if (task.day === Friday) {
            return <Friday key={task.id} task={task}/>
          }
          else if (task.day === Saturday) {
            return <Saturday key={task.id} task={task}/>
          }
          else if (task.day === Sunday) {
            return <Sunday key={task.id} task={task}/>
          }
        
          })}

      </div>
    </div>
  );
}

export default App;
