import { call, put } from 'redux-saga/effects'
import { usersFetch } from "../../api";
import { setUsers } from "../users_reducer";

export function* getUsersSaga({location}) {
    try {
        let numberPage = new URLSearchParams(location.search).get('page') || 1;
        let userName = new URLSearchParams(location.search).get('name') || '';
        let userGender = new URLSearchParams(location.search).get('gender') || '';
        let species = new URLSearchParams(location.search).get('species') || '';
    
        if (numberPage || userName || userGender || species ) {
            const res = yield call(usersFetch, numberPage, userName, userGender, species)

            if (res.status === 200 && res.data) {
                yield put(setUsers(res.data))
            } else {
                yield put(setUsers({ results: [], info: {} }))
            }
        } 
    }
    catch(error) {
        yield put(setUsers({ results: [], info: {} }))
    }
}