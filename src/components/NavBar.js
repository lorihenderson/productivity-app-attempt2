import React, { useState } from 'react';
import {NavLink, Switch, Route} from 'react-router-dom'
// import Monday from './Monday'
// import Tuesday from './Tuesday'
// import Wednesday from './Wednesday'
// import Thursday from './Thursday'
// import Friday from './Friday'
// import Saturday from './Saturday'
// import Sunday from './Sunday'
import Form from './Form'
import DaysContainer from './DaysContainer';
import Homepage from './Homepage';

function NavBar ( {onAddTask, taskValues}) {

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
                        Form
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
                        <DaysContainer taskValues={taskValues} day="sunday" />
                    </Route>
                    <Route exact path="/Monday">
                        <DaysContainer taskValues={taskValues} day="monday" />
                    </Route>
                    <Route exact path="/Tuesday">
                    <DaysContainer taskValues={taskValues} day="tuesday" />
                    </Route>
                    <Route exact path="/Wednesday">
                    <DaysContainer taskValues={taskValues} day="wednesday" />
                    </Route>
                    <Route exact path="/Thursday">
                    <DaysContainer taskValues={taskValues} day="thursday" />
                    </Route>
                    <Route exact path="/Friday">
                    <DaysContainer taskValues={taskValues} day="friday" />
                    </Route>
                    <Route exact path="/Saturday">
                    <DaysContainer taskValues={taskValues} day="saturday" />
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