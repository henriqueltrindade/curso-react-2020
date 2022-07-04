import React from 'react'
import ProdutoService from '../../app/produtoService'
import { useParams } from 'react-router-dom'
import Card from '../../components/card'

// exemplo 1
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

const estadoInicial = {
  nome: '',
  sku: '',
  descricao: '',
  preco: 0,
  fornecedor: '',
  sucesso: false,
  errors: [],
  atualizando: false
}


class CadastroProduto extends React.Component {
  
    state = estadoInicial
  
     constructor (props) {
      super(props)
      this.service = new ProdutoService();
     }

     componentDidMount () {
      const { sku } = this.props.params;
      if (sku) {
        const resultado = this.service.obterProdutos().find( produto => produto.sku === sku )
        if (resultado) {
          this.setState({ ...resultado, atualizando: true })
        }
      }
     }

    onChange = (event) => {
        const valor = event.target.value 
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
      event.preventDefault();

      const produto = {
        nome: this.state.nome, 
        sku: this.state.sku,
        descricao: this.state.descricao,
        preco: this.state.preco,
        fornecedor: this.state.fornecedor
      }
      try {
        this.service.salvar(produto)
        this.limparCampos()
        console.log('Salvo com sucesso!')
        this.setState({ sucesso: true })          
      } catch (error) {
        this.setState({ errors: error.errors })
      }
    }

    limparCampos = (_) => {
      this.setState(estadoInicial)
    }

    render () {
        return (
            <Card header={ this.state.atualizando ? 'Atualizando de Produto' : 'Cadastro de Produto' }>
              <form id="frmProduto" onSubmit={this.onSubmit} >

                { this.state.sucesso &&
                  <div className="alert alert-dismissible alert-success">
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>Bem feito!</strong> Cadastro realizado com sucesso
                  </div>
                }

                {
                  this.state.errors.length > 0 && 
                    this.state.errors.map( (msg, index) => {
                      return (
                        <div className="alert alert-dismissible alert-danger" key={ index }>
                          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                          <strong>Error!</strong> {msg}
                        </div>
                      )
                    })
                }
                  <div className='row'>
                      <div className='col'>
                          <div className='form-group'>
                              <label>Nome: *</label>
                              <input type='text'
                                    className='form-control'
                                    name="nome"
                                    value={this.state.nome}
                                    onChange={this.onChange}
                              />
                          </div>
                      </div>
                      <div className='col'>
                          <div className='form-group'>
                              <label>SKU: *</label>
                              <input type='text' 
                                      className='form-control'
                                      disabled={this.state.atualizando}
                                      name="sku" value={this.state.sku} 
                                      onChange={this.onChange} />
                          </div>
                      </div>
                  </div>

                  <div className='row'>

                      <div className='col'>
                          <div className='form-group'>
                              <label>Descrição: </label>
                              <textarea className='form-control' 
                                        name="descricao"
                                        value={this.state.descricao}
                                        onChange={this.onChange} />
                          </div>
                      </div>

                  </div>

                  <div className='row'>
                      <div className='col'>
                          <div className='form-group'>
                              <label>Preço: *</label>
                              <input type='text'
                                    className='form-control'
                                    name="preco" value={this.state.preco}
                                    onChange={this.onChange}
                              />
                          </div>
                      </div>
                      <div className='col'>
                          <div className='form-group'>
                              <label>Fornecedor: *</label>
                              <input type='text'
                                    className='form-control'
                                    name="fornecedor"
                                    value={this.state.fornecedor}
                                    onChange={this.onChange}
                              />
                          </div>
                      </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-1 mb-1'>
                          <button type='submit' className='btn btn-success'> { this.atualizando ? 'Atualizar' : 'Salvar' } </button>
                      </div>
                      <div className='col-md-1 mb-1'>
                          <button className='btn btn-primary' onClick={this.limparCampos} >Limpar</button>
                      </div>
                  </div>

              </form>
            </Card>
        )
    }
}

// exemplo 2
// export default (props) => (
//   <CadastroProduto
//     {...props}
//     params={useParams()}
//   />
// )

export default withParams(CadastroProduto);