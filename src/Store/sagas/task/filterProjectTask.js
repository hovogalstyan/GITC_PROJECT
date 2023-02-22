import {put, takeEvery, select} from 'redux-saga/effects';
import {taskType} from "../../action-type/actionTypeTask";

function* watchGetTaskFilter() {
    const state = yield select(select => select.tasks.projectItem);
    const task = yield JSON.parse(localStorage.getItem('tasks'));
    const result = yield task.filter((t) => t.projectId === state.id);
    yield put({
        type: taskType.SET_FILTER_TASK_REDUCER,
        payload: result
    })
}

export default function* workerFetchTask() {
    yield takeEvery(taskType.GET_FILTER_TASK_PROJECT_ITEM, watchGetTaskFilter)
}