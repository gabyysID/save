import React from "react";
import { useParams } from "react-router-dom";
import Titulo from "../components/Titulo";
import Campo from "../components/Campo";
import Conteudo from "../components/Conteudo";
import Perfil from "../assets/pessoa3.jpg"

export default function Postagem() {
    const { nome, descricao } = useParams();

    return (
        <>
            <Titulo nome="Mergulhando no React" />
            <Campo>
                <Conteudo
                    foto={Perfil}
                    nome={"@" + nome}
                    descricao={descricao}
                />
            </Campo>
        </>
    );
}
