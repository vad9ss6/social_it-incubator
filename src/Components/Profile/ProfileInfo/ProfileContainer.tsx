import React from "react";
import Profile from "../Profile";
import axios from "axios";
import { connect } from "react-redux";
import {setUserProfileAC, userProfileType} from "../../../Redux/profile-reducer";
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
}
type ProfileContainerPropsType = MSTPType & MDTPType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {

        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfileAC(response.data)
                console.log(response.data)
            });
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

export default connect(mapStateToProps,  {setUserProfileAC} )(WithUrlDataContainerComponent);