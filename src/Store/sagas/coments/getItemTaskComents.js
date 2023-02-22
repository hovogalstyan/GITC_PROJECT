import {put, takeEvery} from 'redux-saga/effects';
import {commentType} from "../../action-type/actionComentType";

function* watchGetItemTask(id) {
    const task = yield JSON.parse(localStorage.getItem('tasks'))
    const result = yield task.find(t => t.id === id.payload)
    yield put({
        type: commentType.SET_TASK_ITEM_REDUCER,
        payload: result
    })
}

export default function* workerGetItemTaskComment() {
    yield takeEvery(commentType.GET_ID_TASK_ITEM, watchGetItemTask)
}