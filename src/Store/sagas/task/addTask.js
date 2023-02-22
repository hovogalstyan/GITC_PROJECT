import {put, takeEvery} from 'redux-saga/effects';
import {taskType} from "../../action-type/actionTypeTask";

if (!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify([]))
}

function* watchGetItemTask(item) {
    const task = JSON.parse(localStorage.getItem('tasks'));
    const newTask = [...task, item.payload];
    localStorage.setItem('tasks', JSON.stringify(newTask));
    const result = yield  newTask.filter((t) => t.projectId === item.payload.projectId)
    yield put({
        type: taskType.SET_FILTER_TASK_REDUCER,
        payload: result
    })
}

export default function* workerAddNewTask() {
    yield takeEvery(taskType.GET_ITEM_NEW_TASK, watchGetItemTask)
}