import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <h1 className="display-3">Bem-vindo!</h1>
            <p className="lead">Este é seu sistema, utilize a barra de navegação para acessar as páginas.</p>
            <hr className="my-4" />
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/" role="button">Cadastrar</Link>
            </p>
        </div>
    )
}

export default Home;