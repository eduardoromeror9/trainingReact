// import React, { Fragment } from 'react';
import React from 'react';



// Funcional componente 

const PrimerApp = ( props ) => {

  const saludo = 'Hola mundo!!';

  console.log(props);

  return (

    <>  
      <h1>{ saludo }</h1>
      <p>PrimerApp</p>
    </>
  
  );

}


export default PrimerApp;