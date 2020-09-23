import React from 'react';

export default (props) => {
    const className = props.className || '';

    // Check if props.decription is an array, if it is
    // then use it as the description otherwise assume
    // props.description is just a string so wrap it in an
    // array so that we only have to handle one type of
    // data in our render phase.
    const description = Array.isArray(props.description)
                            ? props.description : [props.description];

    if(!props.description || props.description === '') {
        // The description property is either null, undefined,
        // or an empty string and therefore we should not display
        // this component at all.
        return ( null );
    }

    return (
        <div className={`product__description ${className}`}>
            <h3>Description</h3>
            {
                description.map((description, index) => {
                    return (<p key={index}>{description}</p>);
                })
            }
        </div>
    )
}
