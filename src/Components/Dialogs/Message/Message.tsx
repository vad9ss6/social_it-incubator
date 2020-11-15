import React from "react";

type MessagePropType = {
    id: number
    message: string

}


const Message = (props:MessagePropType) => {
    return(
        <div>{props.message}</div>
    )
}

export default Message