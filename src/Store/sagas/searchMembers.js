import {put, takeEvery} from 'redux-saga/effects';
import {membersActionType} from "../action-type/actionTypeMembers";

function* watchGetMembersEmail(text) {
    const data = yield  JSON.parse(localStorage.getItem('users'));
    const results = yield data.filter((item) => {
        if (item.email.includes(text.payload)) {
            return item
        }
    })
    yield put({
        type: membersActionType.SET_NEW_DATE_EDITE_MEMBERS_LIST,
        payload: results
    })
}

export default function* workerMembersSearch() {
    yield takeEvery(membersActionType.GET_SEARCH_TEXT_VALUE, watchGetMembersEmail)
}