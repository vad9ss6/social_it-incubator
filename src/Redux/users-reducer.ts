import {userType} from "../Components/Users/UsersContainer"


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

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
    users: Array<userType>
}
type setCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    p: number
}
type setTotalUsersCountType = {
    type: 'SET_TOTAL_USER_COUNT'
    totalCount: number
}

type TOGGLE_IS_FETCHING = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}


type ActionDialogsType =
    followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountType
    | TOGGLE_IS_FETCHING

export type usersType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: usersType = {
    users: [],
    pageSize: 23,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state = initialState, action: ActionDialogsType) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.p
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export type DispatchUserType =
    followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountType
    | TOGGLE_IS_FETCHING

export const followAC = (id: number): followActionType => ({type: FOLLOW, id})
export const unFollowAC = (id: number): unFollowActionType => ({type: UNFOLLOW, id})
export const setUsersAC = (users: Array<userType>): setUsersActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (p: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, p})
export const setTotalUsersCountAC = (count: number): setTotalUsersCountType => ({
    type: SET_TOTAL_USER_COUNT,
    totalCount: count
})
export const setIsFetchingAC = (isFetching: boolean): TOGGLE_IS_FETCHING =>({type: "TOGGLE_IS_FETCHING", isFetching})