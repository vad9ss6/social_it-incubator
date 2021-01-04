import React from "react";
import  s from "./SideBar.module.css";
import {NavLink} from "react-router-dom";
import commonStyle from "../Common/style/commonStyle.module.css"

const SideBar = () => {
    return(
        <aside className={`${s.sideBar} ${commonStyle.container}`}>
            <nav>
                <NavLink to="/profile" >Profile</NavLink>
                <NavLink to="/dialogs">Messages</NavLink>
                <NavLink to="/usersAPIComponent">Users</NavLink>
            </nav>
        </aside>
    )
}

export default SideBar;

