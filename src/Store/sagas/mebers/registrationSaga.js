import {membersActionType} from "../../action-type/actionTypeMembers";
import {put, takeEvery} from 'redux-saga/effects';

function* watchFetchUserCompare(user) {
    const dataUser = yield JSON.parse(localStorage.getItem('users'));
    yield put({
        type: membersActionType.SET_MEMBERS_REDUCER,
        payload: user.payload
    })
    const nuwDate = yield [...dataUser, user.payload]
    localStorage.setItem('users', JSON.stringify(nuwDate))
}

export default function* workerRegistrationUser() {
    yield takeEvery(membersActionType.ADD_NEW_MEMBERS_REDUCER, watchFetchUserCompare)
}