import React from 'react';
import axios from 'axios';
import avatar from '../../assets/avatar.png'

type PhotoType = {
    small: string
    large: string
}

export type users = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotoType
    status: string
    followed: boolean
}
export type UsersType = {
    users: Array<users>
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<users>) => void
}

class Users extends React.Component<UsersType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>

            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small? u.photos.small : avatar} alt="" style={{width: '100px', height: 'auto'}}/>
                    </div>
                    <div>
                        {u.name}
                    </div>
                    {
                        u.followed
                            ? <button onClick={() => this.props.unFollow(u.id)}>unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>follow</button>
                    }
                </div>)
            }
        </div>
    }
}

export default Users