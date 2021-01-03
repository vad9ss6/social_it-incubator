import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authType, setAuthUserDateAC} from "../../Redux/auth-reducer";
import {IGlobalState} from "../../Redux/redux-store";
import { usersAPI } from "../../api/api";


type MDTPType = {
    setAuthUserDateAC: (data: authType) => void
}
type MSTPType = {
    isAuth: boolean
    login: string | null
}

type PropsType = MDTPType & MSTPType
class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        usersAPI.AuthMe()
            .then(response =>{
                if(response.data.resultCode === 0){
                    this.props.setAuthUserDateAC(response.data.data)
                }
            })

    }

    render(){
        return <Header {...this.props}/>
    }

}
const MSTPType = (state: IGlobalState):MSTPType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(MSTPType, {setAuthUserDateAC})(HeaderContainer)

