import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Login = React.lazy(() => import('./pages/Login'));
const Four0Four = React.lazy(() => import('./pages/404'));
const UsersDetails = React.lazy(() => import('./pages/UsersDetails'));
const DeviceStore = React.lazy(() => import('./pages/DeviceStore'));

const App: React.FunctionComponent<{}> = (): React.ReactElement => (
  <React.Suspense fallback={<div className="uk-flex uk-flex-center uk-flex-middle uk-background-muted uk-height-viewport"><div className="uk-spinner" /></div>}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/user-details" render={() => <UsersDetails />} />
        <Route path="/device-store" render={() => <DeviceStore />} />
        <Route exact path="*" render={() => <Four0Four />} />
      </Switch>
    </Router>
  </React.Suspense>
);

export default App;
