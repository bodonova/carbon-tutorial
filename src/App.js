import React, { Component } from 'react';
import './app.scss';
import { Button } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <div>
        <Button>Button</Button>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
