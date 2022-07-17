import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name.trim() !== '' ? s.someClass : s.error // need to fix with (?:)
    const addUserByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    return (
        <div className={s.inputWrapper}>
            <div className={s.input}>
                <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={addUserByEnter}/>
                <button onClick={addUser} disabled={error !== ''}>add</button>
                <span>{totalUsers}</span>
            </div>
            <span className={s.errorText}>{error}</span>
        </div>
    )
}

export default Greeting
