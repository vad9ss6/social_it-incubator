import React from "react";
import  s from "./SideBar.module.css";
import {NavLink} from "react-router-dom";
import commonStyle from "../Common/style/commonStyle.module.css"

const SideBar = () => {
    return(
        <aside className={`${s.sideBar} ${commonStyle.container}`}>
            <nav>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                <NavLink to="/usersAPIComponent" activeClassName={s.active}>Users</NavLink>
                <NavLink to="/Login" activeClassName={s.active}>Login</NavLink>
            </nav>
        </aside>
    )
}

export default SideBar;

