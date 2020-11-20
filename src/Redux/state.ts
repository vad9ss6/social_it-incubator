

export type StoreType = {
    _state: StateType
    _callSubscriber: _callSubscriberType
    getState: () => StateType
    subscribe: subscribeType
    // dispatch: dispatchType
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}
export type PostType = {
    id: number
    message: string
    likesCount: number
}


export type dispatchType = (action: any) => void
export type _callSubscriberType = (state: StateType) => void
export type subscribeType = (value: () => void) => void

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, how are you?', likesCount: 12},
                {id: 2, message: 'Hello world', likesCount: 26},
                {id: 3, message: 'Hello world', likesCount: 26},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
    // dispatch(action) {
    //     this._state.dialogsPage = profileReducer(this._state.profilePage, action)
    //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    //
    //     this._callSubscriber(this._state)
    // }
}
export default store