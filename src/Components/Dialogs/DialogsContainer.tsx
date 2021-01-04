import React from "react";
import {addMessageAC, newMessageTextAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {IGlobalState} from "../../Redux/redux-store";

const mapStateToProps = (state: IGlobalState) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

