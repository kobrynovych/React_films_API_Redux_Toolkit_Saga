import { takeEvery } from 'redux-saga/effects'
import { getUsersSaga } from './getUsersSaga';
import { getUserSaga } from './getUserSaga';

export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USER_FETCH = 'GET_USER_FETCH';

export default function* rootSaga() {
    yield takeEvery(GET_USERS_FETCH, getUsersSaga);
    yield takeEvery(GET_USER_FETCH, getUserSaga);
}

