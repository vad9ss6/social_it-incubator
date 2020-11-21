import React from "react";
import {addPostAC, changeTextAC, countLikeAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// type ProfilePropsType = {
//     store: any
// }
// const MyPostsContainer = (props: ProfilePropsType) => {
//     const addPost = () => {
//         props.store.dispatch(addPostAC())
//     }
//     const onPostChange = (newValue: string) => {
//         props.store.dispatch(changeTextAC(newValue))
//     }
//     return (<MyPosts profilePage={props.store.getState().profilePage} addPost={addPost} onPostChange={onPostChange} />)
// }
const mapStateToProps = (state: any) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) =>{
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (newValue: string) =>{
            dispatch(changeTextAC(newValue))
        },
        onLikeCount: (id: number) =>{
            dispatch(countLikeAC(id))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

