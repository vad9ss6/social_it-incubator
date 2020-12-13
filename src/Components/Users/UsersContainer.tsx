import React from 'react';
import {connect} from "react-redux";
import Users, {UsersType, users} from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/users-reducer";


type UserPagePropType = {
    usersPage: UsersType
}

type MDTPType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<users>) => void
}

const mapStateToProps = (state: UserPagePropType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any):MDTPType => {
    return {
        follow: (id: number) =>{
            dispatch(followAC(id))
        },
        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users : Array<users>) => {
            dispatch(setUsersAC(users))
        }

    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

