import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./pages/Home"
import { Auth } from "./pages/Auth";
import { Dashboard } from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={() => <Auth action="login" />} />
        <Route exact path="/register" component={() => <Auth action="register" />} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
