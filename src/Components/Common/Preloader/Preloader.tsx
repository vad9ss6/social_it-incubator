import React from 'react';
import preloader from "../../../assets/images/Spinner-1s-200px.svg";
import s from "./preloader.module.css"

export const Preloader = () => {
    return <div className={s.main_block}>
        <img className={s.main_img} src={preloader} alt="preloader" style={{width: '100px'}}/>
    </div>

}