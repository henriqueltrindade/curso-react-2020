import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Produtos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cadastro-produtos">Cadastro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/consultar-produtos">Consulta</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>        
    )
}

export default Navbar;