import React from 'react';
import './App.css';

class App extends React.Component {
  // Usando el state local
  // state = { contador: 0 }

  // _handleClickIncrementar = () => {
  //   console.log('Incrementar');
  //   this.setState({
  //     contador: this.state.contador + 1
  //   })
  // }

  // _handleClickDecrementar = () => {
  //   console.log('Decrementar');
  //   this.setState({
  //     contador: this.state.contador - 1
  //   });
  // }

  render(){
    const { counter, increment, decrement } = this.props;
    return (
      <div className="App">
        <div>
          <h1>Usando Redux en React</h1>
          { /* USANDO EL ESTADO LOCAL */ }
          { /*Contador: <span>{ this.state.contador }</span>
          <br/>
          <button onClick={this._handleClickIncrementar}>+</button>
          <button onClick={this._handleClickDecrementar}>-</button> */}
          { /* USANDO EL ESTADO DE REDUX */ }
          Contador: <span>{ counter }</span>
          <br/>
          <button onClick={ increment }>+</button>
          <button onClick={ decrement }>-</button>
        </div>
      </div>
    );
  }
}

export default App;
