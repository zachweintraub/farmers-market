 import React from 'react';
 import PropTypes from 'prop-types';

 function Market(props) {
    
    if(props.market.message) return <h3>{props.market.message}</h3>
    
    return (
         <div>
             <h3>{props.market.location}</h3>
             <h3>{props.market.hours}</h3>
             <h3>{props.market.booth}</h3>
         </div>
     );
 }

 Market.propTypes = {
     market: PropTypes.object
 };

 export default Market;