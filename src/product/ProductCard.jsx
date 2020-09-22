import React from 'react';
import { useSelector } from 'react-redux';
// import getAllProducts from './productReducer';



/**
 * What needs to happen
 * ====================
 * 
 * - Grab data item description from json file.
 * - Output description into JSX.
 * Note: When outputting description. Need to check if the data is
 * 1) A string then create a <p> for it.
 * 2) If it is in an array, then create a <p> per index.
 * 
 */

function Description() {
    const description = useSelector(state => state.products["round-shieldofthe-bear"].description);

    return (
        <>
        <h3>Description</h3>
        <p>{description}</p>
        </>
    );
} 

// return (
//     <div class="product-stats">
//       {stats.map((equipdesc, index) => {
//         return (
//          <p>{equipdesc}</p> 
//         );
//       })}
//     </div>
//   );

// check description if pure string or array
// if pure string return <p>
// if array do above

export default Description;

