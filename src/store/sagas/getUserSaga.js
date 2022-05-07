import { call, put } from 'redux-saga/effects'
import { userFetch } from "../../api";
import { setUser } from "../users_reducer";

export function* getUserSaga({id}) {
    try {
        const res = yield call(userFetch, id);

        if (res.status === 200 && res.data) {
            yield put(setUser(res.data));
        } else {
            yield put(setUser({}));
        }
    }
    catch(error) {
        yield put(setUser({}));
    }
}