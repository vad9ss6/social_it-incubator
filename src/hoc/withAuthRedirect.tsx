import React from "react";
import {Redirect} from "react-router-dom";

type PropsType = {
    isAuth: boolean
}

export function withAuthRedirect<P extends {}>(WrapperComponent: React.ComponentType<P>){
    class RedirectComponent extends React.Component<PropsType & P> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <WrapperComponent {...this.props} />
        }
    }

   return RedirectComponent
}

