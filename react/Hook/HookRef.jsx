import React, { useState,useEffect,useRef } from 'react';

function HookRef(){
  const inputRef =useRef(null);

  const focarInput = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text"/>
      <button onClick={focarInput}>Focar no Input</button>
    </div>

  );
}
export default HookRef
