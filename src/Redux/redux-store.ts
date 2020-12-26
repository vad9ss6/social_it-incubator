import { createStore, combineReducers } from 'redux'
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";



const reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage: usersReducer
})
export type IGlobalState = ReturnType<typeof reducer>;

export const store = createStore(reducer)

