import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './LoginPage';
import Register from './Register';
import Profile from './Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/profile' component={Profile} />
      <Route component={App} />
    </Switch>
  </Router>
)

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
