const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';
const LIKE_COUNT = 'LIKE-COUNT'

export type addPostType = {
    type: 'ADD-POST'
}
export type updateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    value: string
}
export type countLikeType = {
    type: 'LIKE-COUNT'
    id: number
}

export type ActionProfileType = addPostType | updateNewPostTextType | countLikeType

export type ProfilePageType = {
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
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: state.posts[state.posts.length-1].id+1, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.value
            }
        case 'LIKE-COUNT': {
            const post = state.posts.find(p => p.id === action.id)
            if(post){
                post.likesCount = post.likesCount + 1
            }
            return {
                ...state,
                posts: [...state.posts]
            }
        }
        default:
            return state
    }
}

export const addPostAC = ():addPostType => ({type: ADD_POST})
export const changeTextAC = (newValue: string):updateNewPostTextType => ({type: UPDATE_NEW_POST_TEXT, value: newValue})
export const countLikeAC =(id: number): countLikeType => ({type: LIKE_COUNT, id})