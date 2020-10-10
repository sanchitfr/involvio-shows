import React from 'react';

import Button from './Button';

import './ShowItem.css';

const ShowItem = ({ show, action, buttonName }) => {

    return (
          <div className="card">
            <img src={show.image.medium} alt="Avatar" style={{width:"100%"}}/>
            <div className="container">
                <h5>{show.name}</h5> 
            </div>
            <Button handleClick={action} arg={show} name={buttonName}/>
        </div>  
    )
}


export default ShowItem;
