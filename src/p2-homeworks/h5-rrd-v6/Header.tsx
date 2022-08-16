import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import './Header.css'

function Header() {

    return (
        <div className={'menu'}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={({isActive}) => isActive ? 'link active' : 'link'}
            >
                preJunior
            </NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={({isActive}) => isActive ? 'link active' : 'link'}
            >
                Junior
            </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={({isActive}) => isActive ? 'link active' : 'link'}
            >
                Junior+
            </NavLink>
            <div className={'icon'}></div>
        </div>
    )
}

export default Header
