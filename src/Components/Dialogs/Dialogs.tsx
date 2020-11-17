import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {DialogsPageType} from "../../Redux/state";
import {addMessageAC, newMessageTextAC} from "../../Redux/dialogs-reducer";



type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: ({}) => void
}

const Dialogs = (props:DialogsPropsType) => {

    const updateNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.currentTarget.value
        props.dispatch(newMessageTextAC(newMessage))
    }
    const onSendMessageClick = () => {
        props.dispatch(addMessageAC())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
            </div>
            <div>
                <textarea placeholder='Enter your message' value={props.dialogsPage.newMessageText} onChange={updateNewMessageText}/>
                <button onClick={onSendMessageClick}>Add new message</button>
            </div>
        </div>
    )
}

export default Dialogs

