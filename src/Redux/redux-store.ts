import { createStore, combineReducers, applyMiddleware } from 'redux'
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'



const reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export type IGlobalState = ReturnType<typeof reducer>;

export let store = createStore(reducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store