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

export const fetchAnime = () => {
    return async dispatch => {

        const result = await fetch(allAnime);
        console.log(result);

        const resultData = await result.json();

        dispatch({
            type: FETCH_ANIME_LIST,
            payload: resultData
        })
    }
}

export const fetchRecommendedAnime = ({ genre1, genre2 }) => {

    return async dispatch => {
        const response = await fetch(recAnime + genre1 + `/` + genre2);

        const responseData = await response.json();

        const slicedData = responseData.slice(0, 8);

        dispatch({
            type: FETCH_RECOMMENDED_ANIME,
            payload: slicedData
        })
    }
}

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

export const createYourList = ({ id, title, desc, list }) => {
    // console.log("title " + title + ' desc ' + desc)
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

export const deleteYourList = (listId) => {
    return {
        type: DELETE_YOUR_LIST,
        payload: {
            listId: listId
        }
    }
}

export const toggleList = (listId, anime) => {
    return {
        type: TOGGLE_LIST,
        payload: {
            listId: listId,
            anime: anime,
        }
    }
}

export const removeFromList = (listId, animeId) => {
    return {
        type: REMOVE_FROM_LIST,
        payload: {
            listId: listId,
            animeId: animeId
        }
    }
}