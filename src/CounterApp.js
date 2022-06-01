import React from 'react';
import PropTypes from 'prop-types';



const CounterApp = ( { edades } ) => {

  return (
    <>  
      <h1> CounterApp </h1>
      <h2>{ edades }</h2>
    </>
  
  );

}


CounterApp.propTypes = {
  edades: PropTypes.number.isRequired
}


export default CounterApp;