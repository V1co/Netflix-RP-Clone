import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { 
    AudioDesc,
    AudioSub,
    Browse,
    Contact,
    Cookies,
    Corporate,
    Gifts,
    Help,
    Invest,
    Jobs,
    Legal,
    Media,
    Privacy,
    Signin,
    Signup,
    Terms,
    Home } from './pages';
import { useAuthListener } from './hooks';

export function App() {
    const { user } = useAuthListener();

  return (
    <Router>
        <Switch>
            <Route path={ROUTES.AUDIO_DESC}>
                <AudioDesc />
            </Route>
            <Route path={ROUTES.AUDIO_SUB}>
                <AudioSub />
            </Route>
            <ProtectedRoute user={ user } path={ROUTES.BROWSE}>
                <Browse />
            </ProtectedRoute>
            <Route path={ROUTES.CONTACT}>
                <Contact />
            </Route>
            <Route path={ROUTES.COOKIES}>
                <Cookies />
            </Route>
            <Route path={ROUTES.CORPORATE}>
                <Corporate />
            </Route>
            <Route path={ROUTES.GIFTS}>
                <Gifts />
            </Route>
            <Route path={ROUTES.HELP}>
                <Help />
            </Route>
            <Route path={ROUTES.INVEST}>
                <Invest />
            </Route>
            <Route path={ROUTES.JOBS}>
                <Jobs />
            </Route>
            <Route path={ROUTES.LEGAL}>
                <Legal />
            </Route>
            <Route path={ROUTES.MEDIA}>
                <Media />
            </Route>
            <Route path={ROUTES.PRIVACY}>
                <Privacy />
            </Route>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                <Signin />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                <Signup />
            </IsUserRedirect>
            <Route exact path={ROUTES.TERMS}>
                <Terms />
            </Route>
            <Route exact path={ROUTES.HOME}>
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}