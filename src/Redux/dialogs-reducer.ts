const SEND_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type addMessagesType = {
    type: 'ADD-MESSAGE'
}
export type updateNewMessagesTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    value: string
}

export type ActionDialogsType = addMessagesType | updateNewMessagesTextType

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}
type DialogsType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'vadim'},
        {id: 2, name: 'andrey'},
        {id: 3, name: 'sasha'},
        {id: 4, name: 'dmitriy'},
        {id: 5, name: 'viktor'},
        {id: 6, name: 'denis'},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'react the best'},
        {id: 3, message: 'yo yo yo '},
        {id: 4, message: 'abra kad'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionDialogsType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                newMessageText: '',
                messages: [
                        ...state.messages,
                        {id: state.messages[state.messages.length-1].id + 1, message: state.newMessageText}
                    ]
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.value
            }
        default:
            return state
    }
}

export const addMessageAC = (): addMessagesType => ({type: SEND_MESSAGE})
export const newMessageTextAC = (newValue: string): updateNewMessagesTextType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    value: newValue
})