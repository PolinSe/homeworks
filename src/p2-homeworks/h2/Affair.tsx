import React from 'react'
import {AffairType} from './HW2';
import s from './Affair.module.css'
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    // const deleteCallback = () => {}// need to fix

    return (
        <div className={s.container} key={props.affair._id}>
            <span>{props.affair.name}</span>
            <span>{props.affair.priority}</span>

            <button className={s.button} onClick={() => props.deleteAffairCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
