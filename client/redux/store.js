import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import animeReducer from './reducers/animeReducer';
// import throttle from 'lodash.throttle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

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

const rootReducer = combineReducers({
    anime: persistReducer(persistConfig, animeReducer)
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

// export default createStore(rootReducer, middleware);
export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);