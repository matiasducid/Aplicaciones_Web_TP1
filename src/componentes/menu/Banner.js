import React from 'react'
//import './Banner.css'
//import '../Responsive.css'

const Banner = () => {
    return(
        <div className="banner">
            <img src="img/banner.jpg" alt="" className="banner_img"/>
            <div className="contenedor">
                <h2 className="banner__titulo">La mejor muebleria a tu alcance</h2>
                <p className="banner__txt">Armá tu hogar con nosotros y alcanzá el hogar de tus sueños</p>
            </div>
        </div> 
    )
}

export default Banner;
