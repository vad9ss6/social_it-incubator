import React from 'react';
import {connect} from "react-redux";
import Users, {UsersType, users} from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/users-reducer";


type UserPagePropType = {
    usersPage: UsersType
}

const mapStateToProps = (state: UserPagePropType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
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

