import React, {ChangeEvent} from "react";

import {DialogsPageType} from "../../Redux/state";
import {addMessageAC, newMessageTextAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    dialogsPage: any
    dispatch: any
}

const DialogsContainer = (props: DialogsPropsType) => {
    debugger
    const updateNewMessageText = (newMessage: string) => {
        props.dispatch(newMessageTextAC(newMessage))
    }
    const sendMessageClick = () => {
        props.dispatch(addMessageAC())
    }

    return <Dialogs dialogsPage={props.dialogsPage} updateNewMessageText={updateNewMessageText}
                    onSendMessageClick={sendMessageClick}/>
}

export default DialogsContainer

