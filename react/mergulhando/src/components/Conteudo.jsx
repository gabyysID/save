import React from "react";
import styled from "styled-components";

const ModeloConteudo = styled.div`
    background: #3b424c;
    border-radius: 16px;
    margin-bottom: 16px;
    padding: 16px;
`;

const ConteudoTopo = styled.div`
    display: flex;
    gap: 16px;
`;

const ConteudoFoto = styled.img`
    border-radius: 100%;
    height: 96px;
    width: 96px;
`;

const ConteudoNome = styled.div`
    align-self: center;
    color: #666699;
`;

const ConteudoDescricao = styled.div`
    margin-top: 16px;
    text-align: justify;
    color: white;
`;

export default function Conteudo(props) {
    return (
        <ModeloConteudo>
            <ConteudoTopo>
                <ConteudoFoto src={props.foto} alt="foto" />
                <ConteudoNome>{props.nome}</ConteudoNome>
            </ConteudoTopo>
            <ConteudoDescricao>{props.descricao}</ConteudoDescricao>
        </ModeloConteudo>
    );
}
