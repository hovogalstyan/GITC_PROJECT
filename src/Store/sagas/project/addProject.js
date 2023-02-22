import {put, takeEvery} from 'redux-saga/effects';
import {projectType} from "../../action-type/actionTypeProject";

if (!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify([]))
}

function* watchGetItemNewProject(item) {
    const dataProject = yield JSON.parse(localStorage.getItem('projects'));
    const nuwDataProject = yield [item.payload, ...dataProject];
    localStorage.setItem('projects', JSON.stringify(nuwDataProject));
    yield put({
        type: projectType.SET_NUW_PROJECT_REDUCER,
        payload: nuwDataProject
    })
}

export default function* workerAddProject() {
    yield takeEvery(projectType.ADD_NEW_PROJECT, watchGetItemNewProject)
}