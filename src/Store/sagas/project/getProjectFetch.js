import {put, takeEvery} from 'redux-saga/effects';
import {projectType} from "../../action-type/actionTypeProject";

function* watchGetProject() {
    const dataProject = yield JSON.parse(localStorage.getItem('projects'));
    ;
    yield put({
        type: projectType.SET_NUW_PROJECT_REDUCER,
        payload: dataProject
    })
}

export default function* workerAllProjectList() {
    yield takeEvery(projectType.GET_START_PROJECT_FETCH, watchGetProject)
}