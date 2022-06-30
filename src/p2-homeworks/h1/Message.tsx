import React from 'react'
import s from './Message.module.css'

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={s.container}>
            <div className={s.image_wrapper}>
                <div className={s.image_wrapper2}>
                    <img className={s.image} src={props.avatar} alt={"avatar"}/>
                </div>
            </div>
            <div className={s.message_container}>
                <div className={s.message_container_text}>
                    <h2>{props.name}</h2>
                    <p className={s.message_content}>{props.message}</p>
                </div>
                <p className={s.message_time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message