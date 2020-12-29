import React, {FC} from "react";
import  s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import {authType} from "../../Redux/auth-reducer";

type PropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserDateAC: (data: authType) => void
}

const Header:FC<PropsType>  = ({isAuth,login}) => {
    return(
        <header className={s.header}>
            <h1>logo</h1>
            <div>
                { {isAuth} ? <p>{login}</p> : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;