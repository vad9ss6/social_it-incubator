import React from "react";
import  s from "./SideBar.module.css";
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return(
        <aside className={s.sideBar}>
            <nav>
                <NavLink to="/profile" >Profile</NavLink>
                <NavLink to="/dialogs">Messages</NavLink>
            </nav>
        </aside>
    )
}

export default SideBar;

