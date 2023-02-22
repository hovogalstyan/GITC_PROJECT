import {taskType} from "../../action-type/actionTypeTask";
import {put, takeEvery} from 'redux-saga/effects';

function* watchGetItemTask(id) {
    const task = JSON.parse(localStorage.getItem('tasks'));
    const result = yield task.filter((t) => t.id !== id.payload)
    yield put({
        type: taskType.SET_REDUCER_ALL_TASK,
        payload: result
    })
    localStorage.setItem('tasks', JSON.stringify(result))
}

export default function* workerTaskDelete() {
    yield takeEvery(taskType.GET_ITEM_TASK_DELETE, watchGetItemTask)
}