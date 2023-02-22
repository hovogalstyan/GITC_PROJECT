import {membersActionType} from "../../action-type/actionTypeMembers";
import {put, takeEvery} from 'redux-saga/effects';

function* FetchMembers() {
    const data = yield JSON.parse(localStorage.getItem('users'))
    yield put({
        type: membersActionType.SET_NEW_DATE_EDITE_MEMBERS_LIST,
        payload: data
    })
}

export default function* workerGetMembers() {
    yield takeEvery(membersActionType.START_FETCH_MEMBERS, FetchMembers)
}