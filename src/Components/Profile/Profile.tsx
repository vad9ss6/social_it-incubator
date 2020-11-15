import React from "react";
import  s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostType, ProfilePageType} from "../../Redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: addPostType
    updateNewPostText:(value: any) => void
}

const Profile = (props: ProfilePropsType) => {
    return(
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;