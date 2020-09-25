import React from 'react';

export default (props) => {
    const className = props.className || '';

    // Check if props.effect is an array, if it is
    // then use it as the effect otherwise assume
    // props.effect is just a string so wrap it in an
    // array so that we only have to handle one type of
    // data in our render phase.
    const effect = Array.isArray(props.effect)
                            ? props.effect : [props.effect];

    if(!props.effect || props.effect === '') {
        // The effect property is either null, undefined,
        // or an empty string and therefore we should not display
        // this component at all.
        return ( null );
    }

    return (
        <div className={`product__effect ${className}`}>
            <h3>Effect</h3>
            {
                effect.map((effect, index) => {
                    return (<p key={index}>{effect}</p>);
                })
            }
        </div>
    )
}
