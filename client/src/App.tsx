import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./pages/Home"
import { Auth } from "./pages/Auth";
import { Dashboard } from './pages/Dashboard';
import { API } from './utils/API';
import { NavBar } from './components/NavBar';
import { SetGoal } from './pages/SetGoal';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState({ loggedIn: false, user: {} })

  useEffect(() => {
    API.isLoggedIn()
      .then(data => {
        if (data.data.loggedIn) setLoggedIn({ loggedIn: true, user: data.data.user })
      })
  }, [loggedIn.loggedIn])


  const handleLogout = () => {
    API.logout()
      .then(data => {
        console.log(data.data)
        window.location.href = "/"
      })
      .catch(err => console.log(err))
  }

  return (
    <Router>
      <NavBar user={loggedIn} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={() => <Auth action="login" loggedIn={loggedIn} />} />
        <Route exact path="/register" component={() => <Auth action="register" loggedIn={loggedIn} />} />
        <Route exact path="/dashboard" component={Dashboard} loggedIn={loggedIn} />
        <Route exact path="/addgoal" component={SetGoal} />
      </Switch>
    </Router>
  );
}

export default App;
