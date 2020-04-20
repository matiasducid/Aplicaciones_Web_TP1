import React from 'react'

const Header = () => {
    return(
        <header className="header">
            <div className="contenedor">
                <h1 className="logo"> Nobelie</h1>
                <span className="icon-menu" id="btn-menu"></span>
                <nav className="nav" id="nav">
                    <ul className="menu">
                        <li className="menu__item"><a href="" className="menu__link select">Inicio</a></li>
                        <li className="menu__item"><a href="src/componentes/catalogo/AppCatalogo.js" className="menu__link">Catalago</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Carrito</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
