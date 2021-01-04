import {Dispatch} from "react";
import {AuthMe} from "../api/api";

const SET_USER_DATE = 'SET_USER_DATE'


export type setUserType = {
    type: 'SET_USER_DATE'
    data: authType
}

export type ActionDialogsType = setUserType
export type authType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const initialState: authType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionDialogsType): authType => {
    switch (action.type) {

        case 'SET_USER_DATE':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserDateAC = (data: authType): setUserType => ({type: SET_USER_DATE, data})

export const getAuthUser = () => {
    return (dispatch: Dispatch<any>) =>{
        AuthMe.me()
            .then(response =>{
                if(response.data.resultCode === 0){
                    dispatch(setAuthUserDateAC(response.data.data))
                }
            })
    }
}
