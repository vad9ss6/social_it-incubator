import React, {ChangeEvent} from "react";
import Post from "./Post/Post";

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    onPostChange: (newValue: string) => void
}
const MyPosts = (props: ProfilePropsType) => {

    const onAddPost = () => {
        props.addPost()
    }
    const onChangeText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value
        props.onPostChange(newValue)
    }

    return (
        <div>
            <h3>MyPosts</h3>
            <div>
                <textarea placeholder='Enter your post' value={props.newPostText} onChange={onChangeText} />
                <button onClick={onAddPost}>Add</button>
            </div>
            {props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>)}
        </div>
    )
}
export default MyPosts;