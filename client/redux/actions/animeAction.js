/* 
    Redux actions to retrieve anime from server.
*/

export const FETCH_ANIME_LIST = 'FETCH_ANIME_LIST';
export const FETCH_RECOMMENDED_ANIME = 'FETCH_RECOMMENDED_ANIME';
export const FETCH_SEASONAL_ANIME = 'FETCH_SEASONAL_ANIME';
export const FETCH_UPCOMING_ANIME = 'FETCH_UPCOMING_ANIME';
export const FETCH_SIMILAR_GENRE_ANIME = 'FETCH_SIMILAR_GENRE_ANIME';
export const CREATE_YOUR_LIST = 'CREATE_YOUR_LIST';
export const DELETE_YOUR_LIST = 'DELETE_YOUR_LIST';
export const TOGGLE_LIST = 'TOGGLE_LIST';
export const REMOVE_FROM_LIST = 'REMOVE FROM LIST';

import { allAnime, recAnime, similarGenreAnime, seasonalAnime, upcomingAnime } from 'animo/redux/actionURLs.js';

// fetch all anime from server
export const fetchAnime = () => {
    return async dispatch => {

        const result = await fetch(allAnime);

        const resultData = await result.json();

        dispatch({
            type: FETCH_ANIME_LIST,
            payload: resultData
        })
    }
}

// fetch all recommended anime using two selected genres
export const fetchRecommendedAnime = ({ genre1, genre2 }) => {

    return async dispatch => {
        const response = await fetch(recAnime + genre1 + `/` + genre2);

        const responseData = await response.json();

        // select only 8 of them
        const slicedData = responseData.slice(0, 8);

        dispatch({
            type: FETCH_RECOMMENDED_ANIME,
            payload: slicedData
        })
    }
}

// fetch similar genre anime for More of What you Love
export const fetchSimilarGenreAnime = (genre) => {
    return async dispatch => {
        const response = await fetch(similarGenreAnime + genre);

        const responseData = await response.json();

        dispatch({
            type: FETCH_SIMILAR_GENRE_ANIME,
            payload: responseData
        })
    }
}

// fetch seasonal anime
export const fetchSeasonalAnime = () => {
    return async dispatch => {
        const response = await fetch(seasonalAnime);

        const responseData = await response.json();

        dispatch({
            type: FETCH_SEASONAL_ANIME,
            payload: responseData
        })
    }
}

// fetch upcoming anime
export const fetchUpcomingAnime = () => {
    return async dispatch => {
        const response = await fetch(upcomingAnime);

        const responseData = await response.json();

        dispatch({
            type: FETCH_UPCOMING_ANIME,
            payload: responseData
        })
    }
}

// create a list using the following payloads
export const createYourList = ({ id, title, desc, list }) => {
    return {
        type: CREATE_YOUR_LIST,
        payload: {
            id: id,
            title: title,
            desc: desc,
            list: list,
        }

    }
}

// delete the list using the list id
export const deleteYourList = (listId) => {
    return {
        type: DELETE_YOUR_LIST,
        payload: {
            listId: listId
        }
    }
}

// add to list using the list id and the anime object
export const toggleList = (listId, anime) => {
    return {
        type: TOGGLE_LIST,
        payload: {
            listId: listId,
            anime: anime,
        }
    }
}

// remove the anime from the list using the list and anime id
export const removeFromList = (listId, animeId) => {
    return {
        type: REMOVE_FROM_LIST,
        payload: {
            listId: listId,
            animeId: animeId
        }
    }
}