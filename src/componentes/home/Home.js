import React from 'react';
import Header from '../menu/Header.js';
import Banner from '../menu/Banner.js';
import Footer from '../footer/Footer.js';

//import './Home.css'
//import '../Responsive.css'

class Home extends React.Component {

	render() {

		return(

			<>

            <Header/>
            <Banner/>
            <main className="main">
                <div className="contenedor">
                    <section className="info">
                        <article className="info__columna">
                            <img src="img/img2.jpg" alt="" className="info__img"/>
                            <h2 className="info__titulo">Comedor</h2>
                            <p className="info__txt">Poseemos una diversa cantidad de mesas redondas, rectangulares y cuadradas para su comedor, también distintos tipos de sillas y distintos una variedad de muebles para su comedor.</p>
                        </article>
                        <article className="info__columna">
                            <img src="img/img3.jpg" alt="" className="info__img"/>
                            <h2 className="info__titulo">Dormitorio</h2>
                            <p className="info__txt">En esta sección podrá encontrar una variedad de camas, sommiers, armarios, escritorios y todo tipo de muebles para su dormitorio.</p>
                        </article>
                        <article className="info__columna">
                            <img src="img/img7.jpg" alt="" className="info__img"/>
                            <h2 className="info__titulo">Living</h2>
                            <p className="info__txt">Tenemos una diversa cantidad de sillones de multiples cuerpos, de un cuerpo, mesas ratonas y mas artículos para tu living.</p>
                        </article>
                    </section> 
                    <section className="productos">
                        <h2 className="section__titulo">Nuestros productos</h2>
                        <div className="productos__columna">
                            <img src="img/img8.jpg" alt="" className="productos__img"/>
                            <div className="productos__descripcion">
                                <h3 className="productos_titulo">Productos en Oferta</h3>
                                <p className="productos__txt">Productos de calidad en ofertas muy accesibles, clikee aquí.</p>
                            </div>
                        </div>
                        <div className="productos__columna">
                            <img src="img/img9.jpg" alt="" className="productos__img"/>
                            <div className="productos__descripcion">
                                <h3 className="productos_titulo">Productos mas vendidos</h3>
                                <p className="productos__txt">Para poder ver los productos más vendidos en este mes acceda aquí.</p>
                            </div>
                        </div>
                        <div className="productos__columna">
                            <img src="img/img5.jpg" alt="" className="productos__img"/>
                            <div className="productos__descripcion">
                                <h3 className="productos_titulo">Productos destacados</h3>
                                <p className="productos__txt">Para ver los productos en los que la mayoría de los clientes muestran interés clikee aquí.</p>
                            </div>
                        </div>
                        <div className="productos__columna">
                            <img src="img/garantia.jpg" alt="" className="productos__img"/>
                            <div className="productos__descripcion">
                                <h3 className="productos_titulo">Productos Outside</h3>
                                <p className="productos__txt">Todos los productos fuera de temporada o con algún daño los puede encontrar en esta sección.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main> 


	  		<Footer />

	  		</>

		)

	}

}

export default Home;
