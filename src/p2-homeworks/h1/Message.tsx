import React from 'react'

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div>
            <img src={props.avatar} alt={'avatar'}></img>
            <h2>{props.name}</h2>
            <p>{props.message}</p>
            <p>{props.time}</p>

        </div>
    )
}

export default Message