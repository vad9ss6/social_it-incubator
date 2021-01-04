import React from "react";
import  s from "./ProfileInfo.module.css";
import {userProfileType} from "../../../Redux/profile-reducer";
import commonStyle from "../../Common/style/commonStyle.module.css";

type ProfileInfoPropsType = {
    profile: userProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return(
        <div className={`${s.content} ${commonStyle.container}`}>
            <div>
                {props.profile.photos.large ? <img src={props.profile.photos.large} alt=""/> : ''}
            </div>
            <div>hello + avatar</div>
        </div>
    )
}

export default ProfileInfo;