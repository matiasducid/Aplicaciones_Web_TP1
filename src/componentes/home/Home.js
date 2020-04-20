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


	  		<Footer />

	  		</>

		)

	}

}

export default Home;
