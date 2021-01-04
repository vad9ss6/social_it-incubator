import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authType, getAuthUser, setAuthUserDateAC} from "../../Redux/auth-reducer";
import {IGlobalState} from "../../Redux/redux-store";

type MDTPType = {
    setAuthUserDateAC: (data: authType) => void
    getAuthUser: () => void
}
type MSTPType = {
    isAuth: boolean
    login: string | null
}
type PropsType = MDTPType & MSTPType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUser()
    }
    render(){
        return <Header {...this.props}/>
    }
}
const MSTPType = (state: IGlobalState):MSTPType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(MSTPType, {setAuthUserDateAC, getAuthUser})(HeaderContainer)

