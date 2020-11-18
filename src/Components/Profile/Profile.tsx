import React from "react";
import  s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../Redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    store: any

    // profilePage: ProfilePageType
    // dispatch: any
    // addPost: addPostType
    // updateNewPostText:(value: any) => void
}

const Profile = (props: ProfilePropsType) => {
    return(
        <div className={s.content}>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;