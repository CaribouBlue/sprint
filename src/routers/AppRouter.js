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
  MenuBar,
  HelpPage,
} from '../components/_index';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div
          className="box"
        >
          <MenuBar />
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
              path="/help"
              component={HelpPage}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
