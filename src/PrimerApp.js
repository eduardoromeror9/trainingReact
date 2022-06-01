// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';



// Funcional componente 

const PrimerApp = ( { saludo, subtitulo } ) => {



  return (
    <>  
      <h1>{ saludo }</h1>
      <p>{ subtitulo }</p>
    </>
  
  );

}

PrimerApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimerApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}


export default PrimerApp;