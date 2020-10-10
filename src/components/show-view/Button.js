import React from 'react';

import './Button.css';

const Button = ({handleClick, arg, name}) => {

    return (
        <div>
            <button onClick={e => handleClick(arg)}>{name}</button>
        </div>
    )
};

export default Button;
