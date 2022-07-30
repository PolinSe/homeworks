import React from 'react'
import {AffairType} from './HW2';
import s from './Affair.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const priorityClass = s[props.affair.priority]

    return (
        <div className={s.container} key={props.affair._id}>
            <span>{props.affair.name}</span>
            <span className={priorityClass}>{props.affair.priority}</span>

            <SuperButton className={s.button} onClick={deleteCallback} red >X</SuperButton>
        </div>
    )
}

export default Affair
