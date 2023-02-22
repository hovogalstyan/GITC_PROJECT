import {put, takeEvery} from 'redux-saga/effects';
import {loginType} from "../../action-type/actionTypeLogin";

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([
        {
            name: 'Hovo',
            id: 123451114477,
            email: 'h@mail.ru',
            password: 'xiks123',
            token: false,
        },
    ]))
}

function* watchFetchUserCompare(user) {
    const dataUser = yield JSON.parse(localStorage.getItem('users'));
    const result = dataUser.find((item) => {
        if (item.email === user.payload.email && item.password === user.payload.password) {
            item.token = true
            return item
        }
    })
    if (result) {
        yield put({
            type: loginType.SET_USER_ITEM_REDUCER,
            payload: result
        })
        localStorage.setItem('users', JSON.stringify(dataUser))
    } else {
        yield put({
            type: loginType.ERROR_MESSING_LOGIN_USER,
            payload: 'noneData'
        })
    }

}

export default function* workerLoginUser() {
    yield takeEvery(loginType.GET_USER_LOGIN_ITEM, watchFetchUserCompare)
}