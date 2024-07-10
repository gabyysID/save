import React,{useState, useMemo} from  'react';

function import React, { useState, useMemo } from 'react';

  function ContagemCara({ contador }) {
      const processamentoIntensivo = (contador) => {
          console.log('Processamento intensivo...');
          for (let i = 0; i < 1000000000; i++) {} 
          return contador * 2;
      };

      const resultadoMemorizado = useMemo(() => processamentoIntensivo(contador), [contador]);

      return <p>Resultado: {resultadoMemorizado}</p>;
  }

  function HookeMemo(){
    const [contador,setContador]=useState(0);
    return(
      <div>
      <button onClick={()=>setContador(contador+1)}>incrementar contador</button>
        <ContagemCara contador={contador}/>
      </div>
    );
  }

export default HookeMemo
