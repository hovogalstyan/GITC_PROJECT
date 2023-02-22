import {loginType} from "../../action-type/actionTypeLogin";
import {put, takeEvery} from 'redux-saga/effects';

function* watchFetchUserData(id) {
    const data = yield JSON.parse(localStorage.getItem('users'))
    const result = yield data.find((item) => {
        if (item.id === Number(id.payload)) {
            return item
        }
    })
    yield put({
        type: loginType.SET_USER_ITEM_REDUCER,
        payload: result
    })
}

export default function* workerGetUserData() {
    yield takeEvery(loginType.GET_USER_DATA, watchFetchUserData)
}