import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import './ShowView.css';

import {addFavourites} from '../../redux/actions/favourites';
import ShowItem from './ShowItem';

const ShowView = ({ addFavourites }) => {
    const [shows, updateShows] = useState();
    
    const fetchShows = async () => {
        const response = await fetch('http://api.tvmaze.com/shows');
        const data = await response.json();
        updateShows(data);
    }
    useEffect(() => {
        fetchShows();
    }, []);
    
    return (
        <div>
            <h1>
              TV Shows
              <Link to='/favourites'><button className='fav-button'>Favourites</button></Link>
            </h1>
            <div className='grid-container'>
                {
                    shows &&
                    shows.map(show => <div className='grid-item'><ShowItem show={show} action={addFavourites} key={show.id} buttonName="Add to Favourites"/></div>)  
                }
            </div>
        </div>
    )
}

export default connect(null, { addFavourites })(ShowView);
