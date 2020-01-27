import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from "reactstrap";
import { Home } from "./pages/Home"
import { Auth } from "./pages/Auth";
import { Dashboard } from './pages/Dashboard';
import { API } from './utils/API';
import { NavBar } from './components/NavBar';
import { SetGoal } from './pages/SetGoal';
import { PrivateRoute } from './components/PrivateRoute';
import { Profile } from './pages/Profile';

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
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={() => <Auth action="login" loggedIn={loggedIn} />} />
          <Route exact path="/register" component={() => <Auth action="register" loggedIn={loggedIn} />} />

          <PrivateRoute>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addgoal" component={SetGoal} />
            <Route exact path="/profile" component={Profile} />
          </PrivateRoute>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
