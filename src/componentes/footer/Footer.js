import React from 'react'
//import '../footer/Footer.css'
//import '../Responsive.css'

const Footer = () => {
    return(
        <footer className="footer">
        <div className="social">
            <a href="http://www.facebook.com" className="icon-facebook" target="_blank"></a>
            <a href="https://twitter.com" className="icon-twitter" target="_blank"></a>
            <a href="https://www.instagram.com" className="icon-instagrem" target="_blank" ></a>
            <a href="" className="icon-whatsapp"></a>
        </div>
        <br/>
        <p className="copy">&copy; Nobelie 2020 - Ningun derecho reservado</p>
    </footer>
    )
}

export default Footer;
