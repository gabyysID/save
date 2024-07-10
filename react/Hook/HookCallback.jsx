import React, { useState, useEffect,useRef,useCallback } from 'react';

function Botao({onClick}){
  console.log('rederizou Botao');
  return<button onClick={onClick}>Clique</button>
}
const MemorizedBotao = React.memo(Botao);



function HookCallback(){
  const [contador, setContador] = useState(0);
  const[contador,useCallback(()=>{
    setContador((prev)=>prev+1);
  },[]);


  return(
    <div>
    <p>cpntador:{contador}</p>
    <MemorizedBotao onClick={incrementar}/>
    </div>



  );
}
export default HookCallback
