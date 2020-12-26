import React from "react";
import Profile from "../Profile";
import axios from "axios";
import { connect } from "react-redux";
import {setUserProfileAC, userProfileType} from "../../../Redux/profile-reducer";
import {IGlobalState} from "../../../Redux/redux-store";


type ProfileContainerPropsType = {
    profile: userProfileType
    setUserProfileAC: (profile: userProfileType) => void
}


class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
                console.log(response.data)
            });
    }

    render(){
        return (
            <Profile profile={this.props.profile} />
        )
    }


}
const mapStateToProps = (state: IGlobalState) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps,  {setUserProfileAC} )(ProfileContainer);