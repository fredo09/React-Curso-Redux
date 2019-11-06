import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Esto es para que el store este al alcance de toda la app
import './index.css';
import AppContainer from './Containers/Counter';
import * as serviceWorker from './serviceWorker';

// importamos el reducer generado 
import { CounterApp } from './reduces';

// importamos la libreria redux y usamos createstore
import { createStore } from 'redux';

/**
 * GENERAMOS EL NUEVO STORE CON  createStore('PASANDO EL REDUCER YA CREADO')
*/
const store = createStore(CounterApp);

ReactDOM.render( 
    <Provider store={ store }>
        <AppContainer />
    </Provider> 
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
