import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Postagem from "./pages/Postagem";
import Inicio from "./pages/Inicio";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Inicio />} />
                <Route index path="/Postagem/:nome/:descricao" element={<Postagem />} />
            </Routes>
        </BrowserRouter>
    );
}
