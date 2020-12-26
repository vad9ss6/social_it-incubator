import React from "react";
import  s from "./ProfileInfo.module.css";
import {userProfileType} from "../../../Redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: userProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return(
        <div className={s.content}>
            <div>
                {props.profile.photos.large ? <img src={props.profile.photos.large} alt=""/> : ''}
            </div>
            <div>hello + avatar</div>
        </div>
    )
}

export default ProfileInfo;