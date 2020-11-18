const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';

export type addPostType = {
    type: 'ADD-POST'
}
export type updateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    value: string
}

export type ActionProfileType = addPostType | updateNewPostTextType

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}

const initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello world', likesCount: 26},
        {id: 3, message: 'Hello world', likesCount: 26},
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {id: 5, message: state.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';

            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.value

            return state
        }
        default:
            return state
    }
}

export const addPostAC = ():addPostType => ({type: ADD_POST})
export const changeTextAC = (newValue: string):updateNewPostTextType => ({type: UPDATE_NEW_POST_TEXT, value: newValue})