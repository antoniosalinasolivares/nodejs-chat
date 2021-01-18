import React, { useContext } from 'react'
import {UserContext} from '../../UserContext'
import {Link} from 'react-router-dom'

const Chat = () => {


    const {user, setUser} = useContext(UserContext)

    return(
        <>
        <h1>Welcome to the Chat: {user.name} </h1>
        <Link to={'/'}>
            <button>go to home</button>
        </Link>
        </>
    )
}

export {Chat}
