// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    nome: 'Henrique'
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ['Fulano', 'Cicrano']
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount () {
    console.log('Executou o componentDidMount')
  }
  
  render () {
    console.log('Executou o render')

    const MeuComboBox = () => this.criaComboBox()
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.state.nome}</h1>
        <h2> Aplicação: {this.props.aplicacao}, versão: {this.props.versao}</h2>
        <MeuComboBox />
      </>
    )
  }
}

export default App;
