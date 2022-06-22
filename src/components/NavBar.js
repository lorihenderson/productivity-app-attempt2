import React, { useState } from 'react';
import {NavLink, Switch, Route} from 'react-router-dom'
import Form from './Form'
import DaysContainer from './DaysContainer';
import Homepage from './Homepage';

function NavBar ( {onAddTask, taskValues, handleDelete}) {

    const [dayTask, setDayTask] = useState([])
    console.log(setDayTask)
    return(
        <header>
            <nav>
                <div id="routes">
                   <NavLink exact className="button-odd" to="/">
                        Homepage
                    </NavLink>
                    
                    <NavLink exact className="button-even" to="/Form">
                        Add A Task
                    </NavLink>
                    <NavLink exact className="button-odd" to="/Monday">
                        Monday
                    </NavLink>
                    <NavLink exact className="button-even" to="/Tuesday">
                        Tuesday
                    </NavLink>
                    <NavLink exact className="button-odd" to="/Wednesday">
                        Wednesday
                    </NavLink>
                    <NavLink exact className="button-even" to="/Thursday">
                        Thursday
                    </NavLink>   
                    <NavLink exact className="button-odd" to="/Friday">
                        Friday
                    </NavLink>   
                    <NavLink exact className="button-even" to="/Saturday">
                        Saturday
                    </NavLink>   
                    <NavLink exact className="button-odd" to="/Sunday">
                        Sunday
                    </NavLink>   
                    <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route exact path="/Sunday">
                        <DaysContainer handleDelete={handleDelete} taskValues={taskValues} day="Sunday" />
                    </Route>
                    <Route exact path="/Monday">
                        <DaysContainer handleDelete={handleDelete} taskValues={taskValues} day="Monday" />
                    </Route>
                    <Route exact path="/Tuesday">
                    <DaysContainer handleDelete={handleDelete} taskValues={taskValues} day="Tuesday" />
                    </Route>
                    <Route exact path="/Wednesday">
                    <DaysContainer handleDelete={handleDelete} taskValues={taskValues} day="Wednesday" />
                    </Route>
                    <Route exact path="/Thursday">
                    <DaysContainer handleDelete={handleDelete} taskValues={taskValues} day="Thursday" />
                    </Route>
                    <Route exact path="/Friday">
                    <DaysContainer handleDelete={handleDelete} taskValues={taskValues} day="Friday" />
                    </Route>
                    <Route exact path="/Saturday">
                    <DaysContainer handleDelete={handleDelete} taskValues={taskValues} day="Saturday" />
                    </Route>
                    <Route exact path="/Form">
                    <Form setDayTask={setDayTask} onAddTask={onAddTask}/>
                    </Route>
                    </Switch>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;