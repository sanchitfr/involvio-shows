import { ADD_FAVOURITE, REMOVE_FAVOURITE } from './types';

export const addFavourites = (show) => dispatch => {
    dispatch({
        type: ADD_FAVOURITE,
        payload: show
    })
};

export const removeFavourite = (show) => dispatch => {
    dispatch({
        type: REMOVE_FAVOURITE,
        payload : show.id
    })
}