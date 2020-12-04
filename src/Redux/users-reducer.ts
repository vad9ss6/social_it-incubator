import { users } from "../Components/Users/Users";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type followActionType = {
    type: 'FOLLOW'
    id: number
}
type unFollowActionType = {
    type: 'UNFOLLOW'
    id: number
}
type setUsersActionType = {
    type: 'SET-USERS'
    users: Array<users>
}


type ActionDialogsType = followActionType | unFollowActionType | setUsersActionType

export type usersType = {
    users: Array<users>
}

const initialState: usersType  = {
    users: []
}

export const usersReducer = (state= initialState, action: ActionDialogsType) => {

    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                       return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return{

                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (id: number):followActionType  => ({type: FOLLOW, id})
export const unFollowAC = (id: number):unFollowActionType  => ({type: UNFOLLOW, id})
export const setUsersAC = (users: Array<users>):setUsersActionType  => ({type: SET_USERS, users})
