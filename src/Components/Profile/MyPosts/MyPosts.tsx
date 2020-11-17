import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {addPostAC, changeTextAC, ProfilePageType} from "../../../Redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: any) => void

    // addPost: addPostType
    // updateNewPostText: (value: string) => void
}



const MyPosts = (props: ProfilePropsType) => {



    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }
    const changeText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = e.currentTarget.value
        props.dispatch(changeTextAC(newValue))
    }

    return (
        <div>
            <h3>MyPosts</h3>
            <div>
                <textarea value={props.newPostText} onChange={changeText} />
                <button onClick={addPostHandler}>Add</button>
            </div>
            {props.profilePage.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>)}
        </div>
    )
}
export default MyPosts;