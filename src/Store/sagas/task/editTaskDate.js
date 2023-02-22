import {put, takeEvery} from 'redux-saga/effects';
import {taskType} from "../../action-type/actionTypeTask";

function* watchGetItemTask(id) {
    const task = JSON.parse(localStorage.getItem('tasks'))
    const result = yield task.find(t => t.id === id.payload)
    yield put({
        type: taskType.SET_TASK_EDIT_DATE_REDUCER,
        payload: result
    })
}

export default function* workerEditTaskDate() {
    yield takeEvery(taskType.GET_ITEM_TASK_EDITE, watchGetItemTask)
}