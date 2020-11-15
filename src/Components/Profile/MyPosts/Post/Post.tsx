import React from "react";
//import  s from "./Post.module.css";

type postPropType = {
    message: string
    like: number
}

const Post = (props: postPropType) => {
    return(
        <div>
            --img-- {props.message}  --{props.like} like--
        </div>
    )
}

export default Post