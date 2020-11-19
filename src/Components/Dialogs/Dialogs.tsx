import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessageType} from "../../Redux/state";


type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageText: (value: string) => void
    onSendMessageClick: () => void
}

const Dialogs = (props:DialogsPropsType) => {
    const onUpdateNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.currentTarget.value
        props.updateNewMessageText(newMessage)
    }
    const onSendMessageClick = () => {
        props.onSendMessageClick()
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
                <textarea placeholder='Enter your message' value={props.dialogsPage.newMessageText} onChange={onUpdateNewMessageText}/>
                <button onClick={onSendMessageClick}>Add new message</button>
            </div>
        </div>
    )
}

export default Dialogs

