import React, { useState, useEffect } from 'react';

function HookEffect() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${contador} times`;
    });

    return (
        <button onClick={() => setContador(contador + 1)}>Atualiza Titulo</button>
    );
}

export default HookEffect;
