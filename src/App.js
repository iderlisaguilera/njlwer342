import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  state = {
    list: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
     inputValue: "",
    }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
  let nuevaListaComentarios = [...this.state.list, this.state.inputValue];
  this.setState({
      list: nuevaListaComentarios,
      inputValue:"",
  })
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
          {this.state.list.map((elem)=>{
              return <li key= {`id${elem}`}>{elem}</li>;
            })}
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input type="text" id="new-task" onChange={this.handleChange} value={this.state.inputValue} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
