import { connect } from 'react-redux';
import Counter from './../App';

/**
 * connect puede recibir 2 parametros 
 * 1.- mapStateToProps: Aqui indicamos que queremos recuperar del estado para que se pase como prop al 
 * conponente que se conecte.
 * 2.- mapDispatchToProps: Aqui indicamos que accion vamos a ejecutar para el reducer
 * este mismo es una funcion. 
*/

// Primer parametro

const mapStateToProps = state => {
    return { counter: state.counter }
}

// Segundo parametro

const mapDispatchToProps = dispatch =>{
    return {
        increment : () => dispatch({ type: 'INCREMENT' }),
        decrement : () => dispatch({ type: 'DECREMENT' })
    }
}

// Generando la conexion

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
);

// A que componente haremos la conexion  
// y exportamos el conenedor que es el que hace la conexion con REDUX

const componentWithConnectionToRedux = createConnection(Counter)

export default componentWithConnectionToRedux;