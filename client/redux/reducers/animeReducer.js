import {
    FETCH_ANIME_LIST,
    FETCH_RECOMMENDED_ANIME,
    FETCH_SEASONAL_ANIME,
    FETCH_UPCOMING_ANIME,
    FETCH_SIMILAR_GENRE_ANIME,
    CREATE_YOUR_LIST,
    DELETE_YOUR_LIST,
    TOGGLE_LIST,
    REMOVE_FROM_LIST,
} from '../actions/animeAction';


const initialState = {
    animeList: [],
    seasonalList: [],
    upcomingList: [],
    similarGenreList: [],
    yourLists: [],
    recList: [],

}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_ANIME_LIST:
            return {
                ...state,
                animeList: action.payload
            }
        case FETCH_RECOMMENDED_ANIME:
            return {
                ...state,
                recList: action.payload
            }

        case FETCH_SEASONAL_ANIME:
            return {
                ...state,
                seasonalList: action.payload
            }

        case FETCH_UPCOMING_ANIME:
            return {
                ...state,
                upcomingList: action.payload
            }

        case FETCH_SIMILAR_GENRE_ANIME:

            // filter through payload to find anime not in recommendations list
            const selectNonRecommendedAnime = action.payload.filter(e => {
                let findInd = state.recList.findIndex((a) => {
                    return (a._id == e._id);
                });
                return (findInd == -1);
            });

            return {
                ...state,
                similarGenreList: selectNonRecommendedAnime
            }

        case TOGGLE_LIST:
            const listIndex = state.yourLists.findIndex(list => list.id === action.payload.listId);
            const animeInList = state.yourLists[listIndex].list.findIndex(anime => anime._id == action.payload.anime._id);

            // add anime to list if it is not present
            if (animeInList < 0) {
                return {
                    ...state,
                    yourLists: [
                        // shallow copy of first half of yourLists
                        ...state.yourLists.slice(0, listIndex),
                        {
                            ...state.yourLists[listIndex],
                            list: [
                                ...state.yourLists[listIndex].list,
                                action.payload.anime
                            ]

                        },
                        // shallow copy of second half of yourLists
                        // removes potential duplicates of previous lists
                        ...state.yourLists.slice(listIndex + 1),
                    ]
                }
            }

            return {
                ...state,
                yourLists: state.yourLists
            }

        case REMOVE_FROM_LIST:
            const removeListIndex = state.yourLists.findIndex(list => list.id == action.payload.listId);
            const removeAnimeIndex = state.yourLists[removeListIndex].list.findIndex(anime => anime._id == action.payload.animeId);

            return {
                ...state,
                yourLists: [
                    ...state.yourLists.slice(0, removeListIndex),
                    {
                        ...state.yourLists[removeListIndex],
                        list: [
                            ...state.yourLists[removeListIndex].list.slice(0, removeAnimeIndex),
                            ...state.yourLists[removeListIndex].list.slice(removeAnimeIndex + 1)
                        ]
                    },
                    ...state.yourLists.slice(removeListIndex + 1),
                ]
            }


        case CREATE_YOUR_LIST:
            // add new list to current lists
            return {
                ...state,
                yourLists: state.yourLists.concat(action.payload)
            }


        case DELETE_YOUR_LIST:
            const deleteListIndex = state.yourLists.findIndex(list => list.id == action.payload.listId);
            return {
                ...state,
                yourLists: [
                    ...state.yourLists.slice(0, deleteListIndex),
                    ...state.yourLists.slice(deleteListIndex + 1)
                ]
            }

    }
    return state;
}