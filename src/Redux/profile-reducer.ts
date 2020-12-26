const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const LIKE_COUNT = 'LIKE-COUNT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
export type setUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: userProfileType
}

export type ActionProfileType = addPostType | updateNewPostTextType | countLikeType | setUserProfileType

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: userProfileType
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type userProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    "github": string | null
    mainLink: string | null
}
type userProfilePhotoType = {
    small: string
    large: string
}
export type userProfileType = {
    aboutMe: string | null
    contacts: userProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: userProfilePhotoType
}

const initialState: ProfilePageType = {
    posts: [
        // {id: 1, message: 'hi, how are you?', likesCount: 12},
        // {id: 2, message: 'Hello world', likesCount: 26},
        // {id: 3, message: 'Hello world', likesCount: 26},
    ] as Array<PostType>,
    newPostText: '',
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: '',
            large: ''
        }
    }
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts[state.posts.length - 1].id + 1,
                    message: state.newPostText,
                    likesCount: 0
                }],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.value
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'LIKE-COUNT': {
            const post = state.posts.find(p => p.id === action.id)
            if (post) {
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

export const addPostAC = (): addPostType => ({type: ADD_POST})
export const changeTextAC = (newValue: string): updateNewPostTextType => ({type: UPDATE_NEW_POST_TEXT, value: newValue})
export const countLikeAC = (id: number): countLikeType => ({type: LIKE_COUNT, id})
export const setUserProfileAC = (profile: userProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile})