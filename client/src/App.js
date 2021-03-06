import React, { useState, useEffect } from 'react'
import { Home } from './components/Home/Home';
import { Chat } from './components/Chat/Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {UserContext} from './UserContext'
import {Navbar} from './components/layout/Navbar';
const App = () => {


  const [user, setUser] = useState({name:'Tony'});


  return (
    <Router>
      <UserContext.Provider value={{user, setUser}}>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App
