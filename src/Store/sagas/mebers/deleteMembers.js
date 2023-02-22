import {membersActionType} from "../../action-type/actionTypeMembers";
import {put, takeEvery} from 'redux-saga/effects';

function* watchGetMembersIdFilter(id) {
    const data = yield  JSON.parse(localStorage.getItem('users'))
    const result = yield  data.filter(t => t.id !== id.payload);
    yield put({
        type: membersActionType.SET_NEW_DATE_LIST_FILTER_MEMBERS,
        payload: result
    })
    localStorage.setItem('users', JSON.stringify(result))
}

export default function* workerMembersDelete() {
    yield takeEvery(membersActionType.GET_ID_DELETE_MEMBERS_ITEM, watchGetMembersIdFilter)
}