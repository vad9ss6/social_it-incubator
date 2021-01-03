import React from 'react';
import {connect} from "react-redux";
import {

    setUsersAC,

    setCurrentPageAC,
    setTotalUsersCountAC, usersType, setIsFetchingAC, toggleIsFollowingProgress, follow, unFollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import {IGlobalState} from "../../Redux/redux-store";
import {Preloader} from "../Common/Preloader/Preloader";
import {usersAPI} from '../../api/api';


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
    follow: (id: number) => void
    unFollow: (id: number) => void
    isFetching: boolean
    setCurrentPage: (p: number) => void
    setUsers: (users: Array<userType>) => void
    setTotalUsersCount: (count: number) => void
    setIsFetching: (isFetching: boolean) => void
    followingInProgress: Array<any>
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    onCurrentPage = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        usersAPI.getUsers(p, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            });
    }

    render() {
        return this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                                                             currentPage={this.props.currentPage}
                                                             pageSize={this.props.pageSize}
                                                             totalUsersCount={this.props.totalUsersCount}
                                                             followingInProgress={this.props.followingInProgress}
                                                             follow={this.props.follow}
                                                             unFollow={this.props.unFollow}
                                                             toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFetching: setIsFetchingAC,
    toggleIsFollowingProgress: toggleIsFollowingProgress
})(UsersAPIComponent)

