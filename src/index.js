import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() { // receves the dispatches from componants and desedes which saga to run
    yield takeEvery('FETCH_IMAGES', fetchImages);
    yield takeEvery('ADD_IMAGES', addImages)

}

function* addImages(action) {
    try {
        console.log(action.payload)
        const post = yield axios.post('/images', action.payload);
        yield put({ type: 'FETCH_IMAGES' });

    } catch {
        console.log('get all error');
    }
}

function* fetchImages() {
    try {
        const images = yield axios.get('/images');
        yield put({ type: 'SET_IMAGES', payload: images.data });

    } catch {
        console.log('get all error');
    }

}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


const imageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        images: imageReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
