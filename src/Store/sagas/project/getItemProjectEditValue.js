import {put, takeEvery} from 'redux-saga/effects';
import {projectType} from "../../action-type/actionTypeProject";

function* watchGetIdProject(id) {
    const data = JSON.parse(localStorage.getItem('projects'));
    const result = yield data.find(t => t.id === id.payload)
    yield put({
        type: projectType.SET_ITEM_PROJECT_REDUCER_EDITE,
        payload: result
    })
}

export default function* workerGetItemEditProject() {
    yield  takeEvery(projectType.GET_ID_PROJECT_EDITE, watchGetIdProject)
}