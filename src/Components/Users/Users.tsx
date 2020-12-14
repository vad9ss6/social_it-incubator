import React from 'react';
import avatar from '../../assets/images/avatar.png'
import Pagination from 'react-js-pagination';


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
                        activePage={props.currentPage}/>
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small? u.photos.small : avatar} alt="" style={{width: '100px', height: 'auto'}}/>
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
}
export default Users