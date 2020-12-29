import { createStore, combineReducers } from 'redux'
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";
import {authReducer} from "./auth-reducer";



const reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export type IGlobalState = ReturnType<typeof reducer>;

export let store = createStore(reducer)

//@ts-ignore
window.store = store