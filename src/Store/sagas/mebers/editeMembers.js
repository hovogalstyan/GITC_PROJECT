import {put, takeEvery} from 'redux-saga/effects';
import {membersActionType} from "../../action-type/actionTypeMembers";

function* watchEditeItem(user) {
    const data = JSON.parse(localStorage.getItem('users'));
    yield  data.forEach((item) => {
        if (item.id === user.payload.id) {
            item.name = user.payload.name
            item.email = user.payload.email
            item.password = user.payload.password
        }
    })
    yield put({
        type: membersActionType.SET_NEW_DATE_EDITE_MEMBERS_LIST,
        payload: data
    })
    localStorage.setItem('users', JSON.stringify(data))
}

export default function* workerMembersSaga() {
    yield takeEvery(membersActionType.EDITE_MEMBERS_ITEM, watchEditeItem)
}