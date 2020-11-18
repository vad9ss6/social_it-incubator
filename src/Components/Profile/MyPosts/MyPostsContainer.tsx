import React from "react";
import {addPostAC, changeTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

type ProfilePropsType = {
    store: any
    // profilePage: ProfilePageType
    // dispatch: any
}
const MyPostsContainer = (props: ProfilePropsType) => {
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const onPostChange = (newValue: string) => {
        props.store.dispatch(changeTextAC(newValue))
    }
    return (<MyPosts profilePage={props.store.getState().profilePage} addPost={addPost} onPostChange={onPostChange} />)
}
export default MyPostsContainer;