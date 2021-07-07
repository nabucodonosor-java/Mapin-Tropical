import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavbarAdmin = () => (
    <nav className="admin-nav-admin-container">
        <ul>
            <li>
                <NavLink to="/admin/pecas" className="admin-nav-admin-item">
                    Peças
                </NavLink>  
            </li>
            <li>
                <NavLink to="/admin/marcas" className="admin-nav-admin-item">
                    Marcas
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/categorias" className="admin-nav-admin-item">
                    Categorias
                </NavLink>
            </li>          
        </ul>
    </nav>
);

export default NavbarAdmin;