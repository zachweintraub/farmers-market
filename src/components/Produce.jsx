import React from 'react';
import PropTypes from 'prop-types';

 function Produce(props) {
    
    return (
         <div>
           {props.produce.selection.map((item, index) =>
            <p key={index}>{item}</p>
            )}
         </div>
    
    );
 }

 Produce.propTypes = {
   produce: PropTypes.object
 };

 export default Produce;