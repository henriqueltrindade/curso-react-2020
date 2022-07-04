import React from 'react'
import ProdutoService from '../../app/produtoService'
import Card from '../../components/card'
import ProdutoTable from './produtoTable'

export default class ConsultaProdutos extends React.Component {
    state = {
        produtos: []
    }

    constructor () {
        super()
        this.service = new ProdutoService()
    }

    deletar = (sku) => {
       const produtos = this.service.deletar(sku)
       this.setState({ produtos })
    }

    componentDidMount () {
        const produtos = this.service.obterProdutos()
        this.setState({ produtos })
    }

    render () {
        return (

            <Card header="Consulta de Produtos">
              <ProdutoTable 
                        produtos={this.state.produtos}
                        deletarAction={this.deletar} />
            </Card>
        )
    }
}