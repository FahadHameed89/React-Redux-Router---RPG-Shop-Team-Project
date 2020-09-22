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

    // use: "sun-cloak" if it has more than one description
    // use: "round-shieldofthe-bear" if only one entry
    
    if (description.constructor === Array)
    {
        return (
            <div class="item-description">
                <h3>Description</h3>
                {description.map((description, index) => {
                    return (
                    <p key={index}>{description}</p> 
                    );
                })}
            </div>
        );
    }

    return (
        <div class="item-description">
            <h3>Description</h3>
            <p>{description}</p>
        </div>
    )
} 
export default Description;

