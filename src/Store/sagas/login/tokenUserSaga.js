import {loginType} from "../../action-type/actionTypeLogin";
import {put, takeEvery} from 'redux-saga/effects';

function* watchTokenUser() {
    const data = yield JSON.parse(localStorage.getItem('users'));
    const result = yield data.find((item) => {
        if (item.token === true) {
            return item
        }
    })
    if (result) {
        yield put({
            type: loginType.SET_USER_ITEM_REDUCER,
            payload: result
        })
    }
}

export default function* workerGetTokenUser() {
    yield takeEvery(loginType.FETCH_TOKEN_ITEM_USER, watchTokenUser)
}