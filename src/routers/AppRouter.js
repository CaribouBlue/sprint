import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { 
  App,
  NotFound,
} from '../components/_index';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={() => <Redirect to="/app" />}
          />
          <Route
            path="/app"
            component={App}
          />
          <Route
            component={NotFound}
          />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
