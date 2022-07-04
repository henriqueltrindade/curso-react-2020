import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroProduto from "./views/produtos/cadastro";
import ConsultaProdutos from "./views/produtos/consulta";

const rotas = () => {
    return (
        <Routes>
            <Route exact path="/cadastro-produtos/" element={<CadastroProduto />} />
            <Route exact path="/cadastro-produtos/:sku" element={<CadastroProduto />} />
            <Route exact path="/consultar-produtos" element={<ConsultaProdutos />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
    )
}

export default rotas;
