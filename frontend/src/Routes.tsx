import Navbar from 'core/components/Navbar';
import Admin from 'pages/Admin';
import Auth from 'pages/Auth';
import Catalog from 'pages/Catalog';
import PecaDetails from 'pages/Catalog/components/PecaDetails';
import Home from 'pages/Home';
import React from 'react';
import { Router, Switch, Route, Redirect  } from 'react-router-dom';
import history from './core/utils/history';


const Routes = () => (
    <Router history={history}>
    <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/pecas"  exact>
                <Catalog />
            </Route>
            <Route path="/pecas/:pecaId">
               <PecaDetails />
            </Route>
            <Redirect from="/auth" to="/auth/login" exact/>
            <Route path="/auth">
                <Auth />
            </Route>
            <Redirect from="/admin" to="/admin/pecas" exact/>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </Router>
);

export default Routes;