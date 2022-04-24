// imports
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import animeReducer from './reducers/animeReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// persist state so user does not lose any recommended anime or their lists
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        "animeList",
        "similarGenreList",
        "yourLists",
        "recList"
    ]
    // whitelist: [*insert array here*] can be used to save specific states
    // if no values are specified, all initial states are saved
}

// combine both animeReducer with persistConfig to persist the state
const rootReducer = combineReducers({
    anime: persistReducer(persistConfig, animeReducer)
});

// apply middleware with thunks
const middleware = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);