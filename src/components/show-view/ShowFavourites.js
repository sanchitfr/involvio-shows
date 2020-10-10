import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ShowItem from './ShowItem';
import { removeFavourite } from '../../redux/actions/favourites';

import './ShowView.css'
const ShowFavourites = ({shows, removeFavourite}) => {
    return (
        <div>
            <h1>Favourites</h1>
            <Link to='/involvio-shows'>Back to all</Link>
            <div className='grid-container'>
                {
                    shows &&
                    shows.map(show => <div className='grid-item'><ShowItem show={show} action={removeFavourite} key={show.id} buttonName="Remove from Favourites"/></div>)  
                }
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    shows : state.Favourites.shows
})

export default connect(mapStateToProps, { removeFavourite })(ShowFavourites);
