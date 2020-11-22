import React from 'react';
import axios from 'axios';
import avatar from '../../assets/avatar.png'

type PhotoType = {
    small: any
    large: any
}

export type users = {
    name: string
    id: number
    uniqueUrlName: any
    photos: PhotoType
    status: any
    followed: boolean
}
export type UsersType = {
    users: Array<users>
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<users>) => void
}

const Users = (props: UsersType) => {
    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    const follow = (id: number) => {
        props.follow(id)
    }
    const unFollowing = (id: number) => {
        props.unFollow(id)
    }

    return <div>
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
                        ? <button onClick={() => unFollowing(u.id)}>unfollow</button>
                        : <button onClick={() => follow(u.id)}>follow</button>
                }
            </div>)
        }
    </div>
}

export default Users