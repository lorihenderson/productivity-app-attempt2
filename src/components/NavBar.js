import React, { useState } from 'react';
import {NavLink, Switch, Route} from 'react-router-dom'
import Monday from './Monday'
import Tuesday from './Tuesday'
import Wednesday from './Wednesday'
import Thursday from './Thursday'
import Friday from './Friday'
import Saturday from './Saturday'
import Sunday from './Sunday'
import Form from './Form'

function NavBar ( {onAddTask}) {

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
                    
                    <Route exact path="/Sunday">
                        <Sunday />
                    </Route>
                    <Route exact path="/Monday">
                        <Monday />
                    </Route>
                    <Route exact path="/Tuesday">
                        <Tuesday />
                    </Route>
                    <Route exact path="/Wednesday">
                        <Wednesday />
                    </Route>
                    <Route exact path="/Thursday">
                        <Thursday />
                    </Route>
                    <Route exact path="/Friday">
                        <Friday />
                    </Route>
                    <Route exact path="/Saturday">
                        <Saturday />
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