import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar () {
    return(
        <header>
            <nav>
                <div id="routes">
                   <NavLink exact className="button-even" to="/">
                        App
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
                </div>
            </nav>
        </header>
    )
}

export default NavBar;