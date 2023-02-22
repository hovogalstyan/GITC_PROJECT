import {put, takeEvery} from 'redux-saga/effects';
import {loginType} from "../../action-type/actionTypeLogin";

function* watchGetIdAdmin(id) {
    const data = JSON.parse(localStorage.getItem('users'));
    yield data.forEach((t) => {
        if (t.id === Number(id.payload)) {
            t.token = false
        }
    })
    yield put({
        type: loginType.SET_DATE_LOGIN_LOGOUT_REDUCER,
        payload: false
    })
    localStorage.setItem('users', JSON.stringify(data))
}

export default function* workerComeOutSaga() {
    yield takeEvery(loginType.GET_ID_LOGIN_ADMIN, watchGetIdAdmin)
}