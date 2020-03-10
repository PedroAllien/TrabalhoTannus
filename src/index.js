//Importar bibliotecas
 
import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.css'

import Joaoboiola from './Joaoboiola'
import Joaoboiola2 from './Joaoboiola2'
//Criar Componentes
class App extends React.Component  {
  jogadores = [
    {
       nome : "Niko",
       time : "Faze Clan",
       pais : "Bósnia"
    },
    {
        nome : "KennyS",
        time : "G2",
        pais : "França"
    },
    {
        nome : "Coldzera",
        time : "Faze Clan",
        pais : "Brasil"
    },
    {
      nome : "Fallen",
      time : "MIBR",
      pais : "Brasil"
  }
]
  constructor(props){
    super(props);

    this.state = {
      indice: 0    
    }
  }
  
  incrementarIndice = (event) =>  {
    console.log(this);
if(this.state.indice < this.jogadores.length-1){
  this.setState({
    indice: this.state.indice +1
  })}
}
    
    decrementarIndice = (event) =>  {
      console.log(this);
      if(this.state.indice > 0){
        this.setState({
          indice: this.state.indice -1
        }
      )}
      }
  
  render(){
    return (
      <div className="container-xl">
          {/* <Joaoboiola nome="Fernando Alvarenga " clube="Brasil" cidadania="Mibr" ></Joaoboiola > */}
          <br></br>
          <button type="button" class="btn btn-danger" onClick={this.decrementarIndice}>Anterior</button>
          <button type="button" class="btn btn-danger" onClick={this.incrementarIndice}>Próximo</button>
          <Joaoboiola2 nome="Messi" clube="Caça rato CR7" cidadania="Cristiano Ronaldo" indice={this.jogadores[this.state.indice]}></Joaoboiola2>
          <h4>Número de Títulos:<span class="badge badge-danger"> {this.state.indice}</span></h4>
          <label class="labeli"for="nome">Nome: </label>
          <input type="password" id="nome" class="labeli" placeholder="Digite aqui"/>
          <button class="btn btn-dark" style={{ backgroundColor: 'dark', color:'white'} }>Enviar</button>
      </div>
  );
  }
}
//Mostrar componentes na tela
ReactDOM.render(<App/>,document.querySelector("#root"))
