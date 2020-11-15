import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {DialogsPageType} from "../../Redux/state";



type DialogsPropsType = {
    dialogsPage: DialogsPageType

}

const Dialogs = (props:DialogsPropsType) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs

