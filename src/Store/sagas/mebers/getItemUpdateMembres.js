import {membersActionType} from "../../action-type/actionTypeMembers";
import {put, takeEvery} from 'redux-saga/effects';

function* watchGetIdMembers(id) {
    const data = JSON.parse(localStorage.getItem('users'));
    const result = yield data.find(t => t.id === id.payload)
    yield put({
        type: membersActionType.SET_MEMBER_NEW_LIST,
        payload: result
    })
}

export default function* workerGetItemUpdateMembersSaga() {
    yield  takeEvery(membersActionType.GET_ITEM_EDIT_MEMBERS, watchGetIdMembers)
}