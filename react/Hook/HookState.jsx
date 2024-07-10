import React, { useState } from 'react';

function HookState(){
  const [contador, setContador] = useState(0);
  return (
    <button onClick={()=>setContador(contador+1)}>{contador}</button>

  );
}
export default HookState
