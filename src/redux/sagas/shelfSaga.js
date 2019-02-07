import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_SHELF" actions
function* fetchShelf(action) {
    try {
        const response = yield axios.get('/api/shelf');
        yield put({ type: 'SET_SHELF', payload: response.data });
    } catch (error) {
        console.log('Error with fetching shelf:', error);
    }
}

// saga function will run on "ADD_TO_SHELF"
function* addToShelf(action) {
    try {
        yield axios.post('/api/shelf', action.payload);
        const newAction = {type: 'FETCH_SHELF'};
        yield put(newAction);
    } catch (error) {
        console.log(`Error in adding to shelf: ${error}`);
    }

} // end addToShelf

function* deleteFromShelf(action) {
    let shelfItem = action.payload;
    console.log('in delete shelfitem', shelfItem);
    
    try {
        yield axios.delete(`/api/shelf/${shelfItem}`);
        let nextAction = { type: 'FETCH_SHELF' };
        yield put(nextAction);
    } catch (error) {
        console.log('in delete error', error);
    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', fetchShelf);
    yield takeLatest('ADD_TO_SHELF', addToShelf);
    yield takeLatest('DELETE_FROM_SHELF',deleteFromShelf);
}

export default shelfSaga;