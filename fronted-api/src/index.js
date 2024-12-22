import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import './index.css';
import {
  Route, BrowserRouter as Router, Switch
} from 'react-router-dom';
import App from './App';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';

const routing = (
    <Router>
        <React.StrictMode>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
                <Footer />
            </div>
        </React.StrictMode>
    </Router>
);


