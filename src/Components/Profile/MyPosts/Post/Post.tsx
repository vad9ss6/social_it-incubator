import React from "react";
//import  s from "./Post.module.css";

type postPropType = {
    message: string
    like: number
    onLikeCount: (id: number) => void
    id: number
}

const Post = (props: postPropType) => {
    const likeCount = () =>{
        props.onLikeCount(props.id)
    }
    return(
        <div>
            --img-- {props.message}  <button onClick={likeCount}>--{props.like} like--</button>
        </div>
    )
}

export default Post