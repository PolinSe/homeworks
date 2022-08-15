import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import './Header.css'

function Header() {

    const [open, setOpen] = useState(false)
    const onClickHandler = () => {
        setOpen(!open)
    }
    return (
        <div className={open ? 'menu menu-open' : 'menu menu-close'}>
            <NavLink to={'/pre-junior'} className={'link'}>preJunior</NavLink>
            <NavLink to={'/junior'} className={'link'}>Junior</NavLink>
            <NavLink to={'/junior-plus'} className={'link'}>Junior+</NavLink>
            <div className={'icon'} onClick={onClickHandler}></div>
        </div>
    )
}

export default Header
