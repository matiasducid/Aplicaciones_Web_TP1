import React from 'react'
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <div className="contenedor">
                <h1 className="logo"> Nobelie </h1>
                <span className="icon-menu" id="btn-menu"></span>
                <nav className="nav" id="nav">
                    <ul className="menu">
                        <li className="menu__item">
                            <NavLink to="/" className="menu__link select">Inicio </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/catalogo" className="menu__link">Catalogo </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="" className="menu__link">Carrito </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="" className="menu__link">Nosotros </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
