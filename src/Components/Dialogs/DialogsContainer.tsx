import React from "react";


import {addMessageAC, newMessageTextAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: any
}

const DialogsContainer = (props: DialogsPropsType) => {
    const updateNewMessageText = (newMessage: string) => {
        props.store.dispatch(newMessageTextAC(newMessage))
    }
    const sendMessageClick = () => {
        props.store.dispatch(addMessageAC())
    }

    return <Dialogs dialogsPage={props.store.getState().dialogsPage} updateNewMessageText={updateNewMessageText}
                    onSendMessageClick={sendMessageClick}/>
}

export default DialogsContainer

