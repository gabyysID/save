import React, { useState,useEffect } from 'react';

const inicialEstado = {contador:0};

function reducer(state,action){
  switch(action.type){
      case'incrementar':
        return {contador:state.contador +1};
      case'decrementar':
        return {contador:state.contador -1};
      default:
        throw new Error();
  }
}


  );
}
export default reducer
