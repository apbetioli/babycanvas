import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";
import './index.css';

import LandingA from 'views/LandingA';
import LandingB from 'views/LandingB';
import Create from 'views/Create';
import Contact from 'views/Contact';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <LandingB {...props} />} />
            <Route path="/a" exact render={props => <LandingA {...props} />} />
            <Route path="/b" exact render={props => <LandingB {...props} />} />
            <Route path="/create" exact render={props => <Create {...props} />} />
            <Route path="/contact" exact render={props => <Contact {...props} />} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
