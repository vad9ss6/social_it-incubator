import React from "react";
import Header from "./Header";
import axios from "axios";


export class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response =>{

            })
    }

    render(){
        return <Header />
    }

}

