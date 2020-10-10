import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions/types';

const initialState = {
    shows : [],
    loading : true
}

const Favourites = (state=initialState, action) => {
    const { payload, type } = action;

    switch(type){
        case ADD_FAVOURITE:
            state.shows = [payload, ...state.shows]
            localStorage.setItem('favourites', state.shows)
            return {
                ...state,
                loading: false
            }

        case REMOVE_FAVOURITE:
            return {
                ...state,
                shows : state.shows.filter(show => show.id !== payload),
                loading: false
            }
        default :
            return state;
    }
}

export default Favourites;