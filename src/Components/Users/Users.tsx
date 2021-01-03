import React from 'react';
import avatar from '../../assets/images/avatar.png'
import Pagination from "react-js-pagination";
import styleUser from './users.module.css'
import {NavLink} from 'react-router-dom';
import axios from "axios";



type PhotoType = {
    small: string
    large: string
}
export type usersAPIComponent = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotoType
    status: string
    followed: boolean
}
export type UsersPropType = {
    users: Array<usersAPIComponent>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    onCurrentPage: (p: number) => void
    followingInProgress: Array<any>
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void

}

const Users = (props: UsersPropType) => {
    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let page = []
    // for (let i = 1; i <= pageCount; i++){
    //     page.push(i)
    // }

    return <div>
        <div>
            <Pagination totalItemsCount={props.totalUsersCount}
                        itemsCountPerPage={props.pageSize}
                        pageRangeDisplayed={5}
                        onChange={(pageNumber) => props.onCurrentPage(pageNumber)}
                        activePage={props.currentPage} innerClass={styleUser.pagination}
                        itemClass={styleUser.pagination_item}/>

        </div>
        <div className={styleUser.accounts}>
            {
                props.users.map(u => <div key={u.id} className={styleUser.page}>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small ? u.photos.small : avatar} alt=""
                                 style={{width: '100px', height: 'auto'}}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.name}
                    </div>
                    {
                        u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "6fc83ead-7a8f-46b1-893b-8465afa55caf"
                                    }

                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    })


                            }}>unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "6fc83ead-7a8f-46b1-893b-8465afa55caf"
                                    }

                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    })

                            }}>follow</button>
                    }
                </div>)
            }
        </div>
    </div>
}
export default Users