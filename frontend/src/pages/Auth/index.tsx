import React from 'react';
import AuthImage from 'core/assets/images/img-login.jpg';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import './styles.scss';

const Auth = () => ( 
    <div className="auth-container">
        <div className="auth-info">
            <h1 className="auth-info-title">
                Posto de Molas Tropical
            </h1>
            <p className="auth-info-subtile">
                Lista de peças e serviços da empresa
            </p>
           <img src={AuthImage} alt="logo" className="auth-img" />
        </div>
        <div className="auth-content">
            <Switch>
                <Route path="/auth/login">
                    <Login />
                </Route>
                <Route path="/auth/register">
                    <h1>PÁGINA EM CONSTRUÇÃO</h1>
                </Route>
                <Route path="/auth/recover">
                    <h1>PÁGINA EM CONSTRUÇÃO</h1>
                </Route>
            </Switch>
        </div>
    </div>
);

export default Auth;