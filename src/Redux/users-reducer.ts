import {userType} from "../Components/Users/UsersContainer"
import {Dispatch} from "react";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

// Action Type
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
type toggleIsFetching = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
type toggleIsFollowingProgress = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: number
}


type ActionUsersType =
    | followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountType
    | toggleIsFetching
    | toggleIsFollowingProgress

export type usersType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}
const initialState: usersType = {
    users: [],
    pageSize: 23,
    totalUsersCount: 0,
    currentPage: 100,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionUsersType) => {
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}


// Action Creator

export const followSuccess = (id: number): followActionType => ({type: FOLLOW, id})
export const unFollowSuccess = (id: number): unFollowActionType => ({type: UNFOLLOW, id})
export const setUsers = (users: Array<userType>): setUsersActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (p: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, p})
export const setTotalUsersCount = (count: number): setTotalUsersCountType => ({
    type: SET_TOTAL_USER_COUNT,
    totalCount: count
})
export const setIsFetching = (isFetching: boolean): toggleIsFetching => ({type: "TOGGLE_IS_FETCHING", isFetching})
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingProgress => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

//  Thunk

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setCurrentPageAC(currentPage))
            });
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })

    }
}

export const unFollow = (userId: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unFollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
}