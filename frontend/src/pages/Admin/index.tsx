import React from 'react';
import { Switch } from 'react-router';
import NavbarAdmin from './components/NavbarAdmin';
import Peca from './components/Peca';
import PrivateRoute from 'core/components/Routes/PrivateRoute';
import Categoria from './components/Categoria';
import Marca from './components/Marca';
import './styles.scss';

const Admin = () => (
    <div className="admin-container">
        <NavbarAdmin />
        <div className="admin-content">
            <Switch>
                <PrivateRoute path="/admin/pecas">
                    <Peca />
                </PrivateRoute>
                <PrivateRoute path="/admin/categorias">
                    <Categoria />
                </PrivateRoute>
                <PrivateRoute path="/admin/marcas">
                    <Marca />
                </PrivateRoute>            
                <PrivateRoute path="/admin/users" allowedRoutes={['ROLE_ADMIN']}>
                    <h1>Users</h1>
                </PrivateRoute>
            </Switch>
        </div>
    </div>
);

export default Admin;