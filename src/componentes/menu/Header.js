import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'
import Usuario from '../usuarios/usuarios.jsx'
class Header extends React.Component {
    //esto es algo que estaba probando
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }

    handleClick(){
        var btnMenu = document.getElementById('btn-menu');
        var nav = document.getElementById('nav');

        btnMenu.addEventListener('click', function(){
            nav.classList.toggle('mostrar')
        })
    }

    render() {
        return (
            <header className="header">
            <div className="contenedor">
                <h1 className="logo"> Nobelie </h1>
                <span className="icon-menu" id="btn-menu" onClick={this.handleClick}></span>

                <nav className="nav" id="nav">
                    <ul className="menu">
                        <li className="menu__item">
                            <NavLink to="/" className="menu__link">Inicio </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/catalogonuevo" className="menu__link">Catalogo </NavLink>
                        </li>
                        <li className="menu__item">
                        <Usuario/>                          
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