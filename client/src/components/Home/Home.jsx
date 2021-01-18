import React, { useContext } from 'react'
import {UserContext} from '../../UserContext'
import {Link} from 'react-router-dom'
const Home = () => {

    const {user, setUser} = useContext(UserContext)
    const setAsJohn = () => {
        const john ={
            name:'John',
            email:'john@mail.com',
            password:'123',
            id:'123'
        }
        setUser(john)
    }
    const setAsTom = () => {
        const Tom ={
            name:'Tom',
            email:'Tom@mail.com',
            password:'321',
            id:'321'
        }
        setUser(Tom)
    }

    return(
        <>

        <h1>Welcome home: {user.name} </h1>
        <button onClick={setAsJohn}>Set as John</button>
        <button onClick={setAsTom}>Set as Tom</button>
        <Link to={'/chat'}>
            <button>go to chat</button>
        </Link>
        </>
    )
}

export {Home}
