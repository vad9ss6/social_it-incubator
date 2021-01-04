import React from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import { setUserProfileAC, userProfileType, getUserProfile } from "../../../Redux/profile-reducer";
import {IGlobalState} from "../../../Redux/redux-store";
import { withRouter, RouteComponentProps } from "react-router-dom";



type PathParamsType = {
    userId: string
}
type MSTPType = {
    profile: userProfileType
}
type MDTPType = {
    setUserProfileAC: (profile: userProfileType) => void
    getUserProfile: (userId: string) => void
}
type ProfileContainerPropsType = MSTPType & MDTPType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }


}
const mapStateToProps = (state: IGlobalState): MSTPType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,  {setUserProfileAC, getUserProfile} )(WithUrlDataContainerComponent);