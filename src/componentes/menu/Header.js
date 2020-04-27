import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'
class Header extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <header className="header">
            <div className="contenedor">
                <h1 className="logo"> Nobelie </h1>
                <span className="icon-menu" id="btn-menu"></span>
                <nav className="nav" id="nav">
                    <ul className="menu">
                        <li className="menu__item" className={this.getNavLinkClass("/")}>
                            <NavLink to="/" className="menu__link">Inicio </NavLink>
                        </li>
                        <li className="menu__item" className={this.getNavLinkClass("/catalogonuevo")}>
                            <NavLink to="/catalogonuevo" className="menu__link">Catalogo </NavLink>
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
};
Header = withRouter(Header);
export default Header;