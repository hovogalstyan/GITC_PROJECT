import {put, takeEvery} from 'redux-saga/effects';
import {taskType} from "../../action-type/actionTypeTask";

function* watchGetProjectItem(taskId) {
    const dataProject = yield JSON.parse(localStorage.getItem('projects'));
    const result = yield  dataProject.find(t => t.id === Number(taskId.payload));
    yield put({
        type: taskType.SET_TASK_DETALISED_REDUCER,
        payload: result
    })
}

export default function* workerTaskProjectItemDetalis() {
    yield takeEvery(taskType.ADD_TASK_PROJECT_ITEM_DETALISED, watchGetProjectItem)
}