import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/asyncActions';

// Watcher SAGA
// Listens the API_CALL_REQUEST Actions
export function* watcherSaga() {
    //Listens the action and starts a Worker Saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// WORKER SAGA
// Is called from watcher saga, dowws login and dispathces an action
export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request));
        // We btain token from response
        const token = response.data.token;
        yield put({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        })
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                token: error
            }
        })
    }
}

function fetchHttp(request) {
    return function() {
        return(axios(request))
    }
}