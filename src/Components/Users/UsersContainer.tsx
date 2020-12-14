import React, {Dispatch} from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setUsersAC,
    unFollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC, DispatchUserType, usersType, setIsFetchingAC
} from "../../Redux/users-reducer";
import axios from "axios";
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
    follow: (id: number) => void
    unFollow: (id: number) => void
    setCurrentPage: (p: number) => void
    setUsers: (users: Array<userType>) => void
    setTotalUsersCount: (count: number) => void
    setIsFetching: (isFetching: boolean) => void
}

class UsersAPIComponent extends React.Component<UsersPropType>{
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    onCurrentPage = (p:number) => {
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      onCurrentPage={this.onCurrentPage} />
    }
}


const mapStateToProps = (state: IGlobalState): usersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

type MDTPType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (count: number) => void
    setIsFetching: (isFetching: boolean) => void
}

// const mapDispatchToProps = (dispatch: Dispatch<DispatchUserType>): MDTPType => {
//     return {
//         follow: (id: number) => {
//             dispatch(followAC(id))
//         },
//         unFollow: (id: number) => {
//             dispatch(unFollowAC(id))
//         },
//         setUsers: (users: Array<userType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (p: number) => {
//             dispatch(setCurrentPageAC(p))
//         },
//         setTotalUsersCount: (count: number) => {
//             dispatch(setTotalUsersCountAC(count))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }


export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFetching: setIsFetchingAC
})(UsersAPIComponent)

