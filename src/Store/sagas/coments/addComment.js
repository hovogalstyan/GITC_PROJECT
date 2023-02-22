import {put, takeEvery, select} from 'redux-saga/effects';
import {commentType} from "../../action-type/actionComentType";

function* watchGetCommentText(com) {
    const state = yield select(select => select.comment.cometsTask);
    const task = yield  JSON.parse(localStorage.getItem('tasks'));
    for (let item of task) {
        if (item.id === state.id) {
            item.comment.push(com.payload)
            yield put({
                type: commentType.SET_COMMENT_TASK_ITEM,
                payload: item
            })
        }
    }
    localStorage.setItem('tasks', JSON.stringify(task))
}

export default function* workerAddComment() {
    yield takeEvery(commentType.GET_TEXT_VALUE_COMMENT, watchGetCommentText)
}