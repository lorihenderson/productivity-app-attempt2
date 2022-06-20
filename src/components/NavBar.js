import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar () {
    return(
        <div id="routes">
            <NavLink exact className="button" to="/">
              App
            </NavLink>
            <NavLink exact className="button" to="/Monday">
              Monday
            </NavLink>
            <NavLink exact className="button" to="/Tuesday">
              Tuesday
            </NavLink>
            <NavLink exact className="button" to="/Wednesday">
              Wednesday
            </NavLink>
            <NavLink exact className="button" to="/Thursday">
              Thursday
            </NavLink>
        </div>
    )
}

export default NavBar;