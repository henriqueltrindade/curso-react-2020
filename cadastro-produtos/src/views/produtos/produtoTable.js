import React from 'react'
import { Link } from 'react-router-dom';

const ProdutoTable = (props) => (
    <table className='table table-hover'>
        <thead>
            <tr>
                <th>Nome</th>
                <th>SKU</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                props.produtos.map( (produto, index) => {
                    return (
                        <tr key={ index }>
                            <th>{ produto.nome }</th>
                            <th>{ produto.sku }</th>
                            <th>{ produto.preco }</th>
                            <th>{ produto.fornecedor }</th>
                            <th>
                                <Link className='btn btn-primary' to={ `/cadastro-produtos/${produto.sku}` }>Editar</Link>
                                <button className='btn btn-danger' onClick={ () => props.deletarAction(produto.sku) } >Remover</button>
                            </th>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
)

export default ProdutoTable;