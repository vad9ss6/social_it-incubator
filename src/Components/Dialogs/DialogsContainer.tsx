import React from "react";
import {addMessageAC, newMessageTextAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return{
        dialogsPage: state.dialogsPage
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (newMessage: string) => {
            dispatch(newMessageTextAC(newMessage))
        },
        sendMessageClick: () => {
            dispatch(addMessageAC())
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer

