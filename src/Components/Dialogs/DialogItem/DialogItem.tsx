import React from "react";
import {NavLink} from "react-router-dom";

import s from "./DialogItem.module.css"

type DialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} className={s.dialogLink}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem
