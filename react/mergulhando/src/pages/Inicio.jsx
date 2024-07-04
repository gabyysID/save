import React from "react";
import Titulo from "../components/Titulo";
import Campo from "../components/Campo";
import Conteudo from "../components/Conteudo";
import Perfil from "../assets/pessoa1.jpg"

export default function Inicio() {
    return (
        <>
            <Titulo nome="Mergulhando no React" />
            <Campo>
                <Conteudo

                    foto={Perfil}
                    nome="@pessoa1"
                    descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt inventore cumque iure delectus voluptatem architecto quasi quibusdam facilis doloremque corporis numquam corrupti velit, perspiciatis earum, dignissimos obcaecati excepturi! Dolorum, numquam?"
                />
            </Campo>
        </>
    );
}

