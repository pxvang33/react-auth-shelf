import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchShelf(action) {
    try {
        const response = yield axios.get('api/user/register');
        yield put({ type: 'SET_SHELF', payload: response.data });
    } catch (error) {
        console.log('Error with fetching shelf:', error);
    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', fetchShelf);
}

export default shelfSaga;