import {DialogsPageType} from "./state";

const SEND_MESSAGE ='ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type addMessagesType = {
    type: 'ADD-MESSAGE'
}
export type updateNewMessagesTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    value: string
}

export type ActionDialogsType = addMessagesType | updateNewMessagesTextType


export const dialogsReducer = (state: DialogsPageType, action: ActionDialogsType) =>{
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage = {id: 1, message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ''

            return state
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            state.newMessageText = action.value

            return state
        }
        default:
            return state
    }
}

export const addMessageAC = ():addMessagesType => ({type: SEND_MESSAGE})
export const newMessageTextAC = (newValue: string):updateNewMessagesTextType => ({type: UPDATE_NEW_MESSAGE_TEXT, value: newValue})