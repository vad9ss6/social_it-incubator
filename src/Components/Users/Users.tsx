import React from 'react';
import avatar from '../../assets/images/avatar.png'
import Pagination from "react-js-pagination";
import styleUser from './users.module.css'
import { NavLink } from 'react-router-dom';



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
                        activePage={props.currentPage} innerClass={styleUser.pagination} itemClass={styleUser.pagination_item}/>

        </div>
        <div className={styleUser.accounts}>
            {
                props.users.map(u => <div key={u.id} className={styleUser.page} >
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small? u.photos.small : avatar} alt="" style={{width: '100px', height: 'auto'}}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.name}
                    </div>
                    {
                        u.followed
                            ? <button onClick={() => props.unFollow(u.id)}>unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>follow</button>
                    }
                </div>)
            }
        </div>
    </div>
}
export default Users