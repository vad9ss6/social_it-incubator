import React from 'react';
import {connect} from "react-redux";
import {
    usersType,
    toggleIsFollowingProgress,
    follow,
    unFollow,
    getUsers
} from "../../Redux/users-reducer";
import Users from "./Users";
import {IGlobalState} from "../../Redux/redux-store";
import {Preloader} from "../Common/Preloader/Preloader";

type usersPhotoType = {
    small: string
    large: string
}
export type userType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: usersPhotoType
    status: string
    followed: boolean
}
export type UsersPropType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
    follow: (id: number) => void
    unFollow: (id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void,

}

class UsersAPIComponent extends React.Component<UsersPropType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onCurrentPage = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
        // this.props.setCurrentPage(p)
    }
    render() {
        return this.props.isFetching  ? <Preloader/> : <Users users={this.props.users}
                                                             currentPage={this.props.currentPage}
                                                             pageSize={this.props.pageSize}
                                                             totalUsersCount={this.props.totalUsersCount}
                                                             followingInProgress={this.props.followingInProgress}
                                                             follow={this.props.follow}
                                                             unFollow={this.props.unFollow}
                                                             onCurrentPage={this.onCurrentPage}/>
    }
}
const mapStateToProps = (state: IGlobalState): usersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    getUsers,
    toggleIsFollowingProgress: toggleIsFollowingProgress
})(UsersAPIComponent)

