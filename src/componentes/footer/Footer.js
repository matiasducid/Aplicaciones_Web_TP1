import React from 'react'
//import '../footer/Footer.css'
//import '../Responsive.css'

const Footer = () => {
    return(
        <footer className="footer">
        <div className="social">
            <a //eslint-disable-line jsx-a11y/anchor-has-content 
                href="http://www.facebook.com" 
                className="icon-facebook" 
                target="_blank"
                rel="noopener noreferrer" >                
            </a>
            <a //eslint-disable-line jsx-a11y/anchor-has-content
                href="https://twitter.com" 
                className="icon-twitter" 
                target="_blank"
                rel="noopener noreferrer" >                
            </a>
            <a //eslint-disable-line jsx-a11y/anchor-has-content
                href="https://www.instagram.com" 
                className="icon-instagrem" 
                target="_blank"
                rel="noopener noreferrer"  >
            </a>
            <a //eslint-disable-line jsx-a11y/anchor-has-content
                href="https://web.whatsapp.com/" 
                className="icon-whatsapp"
                target="_blank"
                rel="noopener noreferrer">
            </a>
        </div>
        <br/>
        <p className="copy">&copy; Nobelie 2020 - Ningún derecho reservado</p>
    </footer>
    )
}

export default Footer;
