import React from "react";
import styled from "styled-components";

const ModeloTitulo = styled.div`
    color: black;
    font-size: 32pt;
    padding: 32px 0;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
`;

export default function Titulo(props) {
    return <ModeloTitulo>{props.nome}</ModeloTitulo>;
}
