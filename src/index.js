import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './Responsive.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//Llamo a los componentes
import Home from './componentes/home/Home'
import Catalogo from './componentes/catalogonuevo/Catalogo'
import CarroGrande from './componentes/catalogonuevo/CarroGrande'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 
import '../node_modules/bootstrap/dist/css/bootstrap.css'



ReactDOM.render(
  <Router>
  <div>
    <Switch>
        {/* Páginas */}
        <Route exact path='/' component={Home} />
        <Route path='/catalogonuevo' component={Catalogo} />
        <Route path='/CarroGrande' component={CarroGrande} />
    </Switch>
  </div>
 </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
