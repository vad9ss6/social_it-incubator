const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE ='ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type StoreType = {
    _state: StateType
    _callSubscriber: _callSubscriberType
    getState: () => StateType
    subscribe: subscribeType
    dispatch: dispatchType
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

// export type addPostType = () => void
export type updateNewPostTextType = (value: string) => void
export type dispatchType = (action?: any) => void
export type _callSubscriberType = (state: StateType) => void
export type subscribeType = (value: () => void) => void

type addPostACType = {type: string}
type changeTextACType = {type: string, value: string}
type addMessageACType = {type: string}
type newMessageTextACType = {type: string, value: string}

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
    },

    // addPost () {
    //     let newPost = {id:5, message:this._state.profilePage.newPostText, likesCount: 0};
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText (value: string) {
    //     this._state.profilePage.newPostText = value
    //     this._callSubscriber(this._state)
    // },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.value
            this._callSubscriber(this._state)
        }else if (action.type === 'ADD-MESSAGE') {
            const newMessage = {id: 1, message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)

        }else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.value
            this._callSubscriber(this._state)

        }
    }
}

export const addPostAC = ():addPostACType => ({type: ADD_POST})
export const changeTextAC = (newValue: string):changeTextACType => ({type: UPDATE_NEW_POST_TEXT, value: newValue})
export const addMessageAC = ():addMessageACType => ({type: SEND_MESSAGE})
export const newMessageTextAC = (newValue: string):newMessageTextACType => ({type: UPDATE_NEW_MESSAGE_TEXT, value: newValue})

export default store