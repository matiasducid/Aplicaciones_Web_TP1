import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
      <header className="header">
        <div className="contenedor">
            <h1 className="logo"> Nobelie</h1>
            <span className="icon-menu" id="btn-menu"></span>
            <nav className="nav" id="nav">
                <ul className="menu">
                    <li className="menu__item"><a href="" className="menu__link select">Inicio</a></li>
                    <li className="menu__item"><a href="catalogo.html" className="menu__link">Catalago</a></li>
                    <li className="menu__item"><a href="carrito.html" className="menu__link">Carrito</a></li>
                    <li className="menu__item"><a href="" className="menu__link">Contacto</a></li>
                </ul>
            </nav>
        </div>
      </header>
      <div className="banner">
        <img src="img/banner.jpg" alt="" className="banner_img"/>
        <div className="contenedor">
            <h2 className="banner__titulo">La mejor muebleria a tu alcance</h2>
            <p className="banner__txt">Armá tu hogar con nosotros y alcanzá el hogar de tus sueños</p>
        </div>
      </div> 

      <main className="className">
        <div className="contenedor">
            <section className="info">
                <article className="info__columna">
                    <img src="img/img2.jpg" alt="" className="info__img"/>
                    <h2 className="info__titulo">Comedor</h2>
                    <p className="info__txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, obcaecati unde? Neque non eius ut?</p>
                </article>
                <article className="info__columna">
                    <img src="img/img3.jpg" alt="" className="info__img"/>
                    <h2 className="info__titulo">Dormitorio</h2>
                    <p className="info__txt">Itaque, quis reprehenderit ipsam id enim omnis veritatis, autem quasi neque eligendi, eius error suscipit?</p>
                </article>
                <article className="info__columna">
                    <img src="img/img7.jpg" alt="" className="info__img"/>
                    <h2 className="info__titulo">Living</h2>
                    <p className="info__txt">Ea dolor quos ipsa unde, est repudiandae, beatae labore sit a aliquid autem? Ipsam, natus.</p>
                </article>
            </section> 
            <section className="cursos">
                <h2 className="section__titulo">Nuestros productos</h2>
                <div className="cursos__columna">
                    <img src="img/img8.jpg" alt="" className="cursos__img"/>
                    <div className="cursos__descripcion">
                        <h3 className="cursos_titulo">Productos en Oferta</h3>
                        <p className="cursos__txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id.</p>
                    </div>
                </div>
                <div className="cursos__columna">
                    <img src="img/img9.jpg" alt="" className="cursos__img"/>
                    <div className="cursos__descripcion">
                        <h3 className="cursos_titulo">Productos mas vendidos</h3>
                        <p className="cursos__txt">Quae dolore adipisci vel ratione iste saepe voluptatem praesentium eligendi.</p>
                    </div>
                </div>
                <div className="cursos__columna">
                    <img src="img/img5.jpg" alt="" className="cursos__img"/>
                    <div className="cursos__descripcion">
                        <h3 className="cursos_titulo">Productos destacados</h3>
                        <p className="cursos__txt">Facere iste itaque repudiandae ullam quia molestiae provident accusamus illum?</p>
                    </div>
                </div>
                <div className="cursos__columna">
                    <img src="img/garantia.jpg" alt="" className="cursos__img"/>
                    <div className="cursos__descripcion">
                        <h3 className="cursos_titulo">Productos Outside</h3>
                        <p className="cursos__txt">Ex earum odit magni? Hic magnam porro repudiandae nisi et.</p>
                    </div>
                </div>
            </section>
        </div>
      </main> 
      <footer className="footer">
        <div className="social">
            <a href="http://www.facebook.com" className="icon-facebook" target="_blank"></a>
            <a href="https://twitter.com" className="icon-twitter" target="_blank"></a>
            <a href="https://www.instagram.com" className="icon-instagrem"target="_blank" ></a>
            <a href="" className="icon-whatsapp"></a>
        </div>
        <p className="copy">&copy; Nobelie 2020 - Ningun derecho reservado</p>
      </footer>
    </div>
    </div>
  );
}

export default App;
