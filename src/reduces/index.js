/** 
 * Generando el Estado incial con Redux
*/

const INITAL_STATE = {
    counter: 0
}

/* 
 *  Generando el Reducer que se ejecuta al inicial la aplicacion razon por la cual se iniciza el state
 *  en el parametro de la funcion, la accion ejecutara el dispatch para ver ejecutare
*/

// REDUCER CounterApp

export const CounterApp = (state = INITAL_STATE, action) => {
    // CONTENIDO DEL REDUCER

    console.log(state, action)
    switch(action.type){
        // CUANDO LA ACCION SEA INCREMENTAR REGRESAMOS EL NUEVO ESTADO 
        case 'INCREMENT' :
            return { // GENERANDO NUEVO ESTADO
                counter: state.counter + 1 // REALIZAMOS EL INCREMENTO
            }
        case 'DECREMENT':
            return { // GENERANDO NUEVO ESTADO
                counter: state.counter - 1 // REALIZAMOS EL DECREMENTO
            }    
        // siempre por default se regresa el state 
        default:
            return state;
    }

}