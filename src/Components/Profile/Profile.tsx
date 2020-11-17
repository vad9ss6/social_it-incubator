import React from "react";
import  s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../Redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType

    dispatch: () => void
    // addPost: addPostType
    // updateNewPostText:(value: any) => void
}

const Profile = (props: ProfilePropsType) => {
    return(
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                     />
        </div>
    )
}

export default Profile;