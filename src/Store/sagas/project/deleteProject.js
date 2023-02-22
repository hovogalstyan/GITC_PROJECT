import {put, takeEvery} from 'redux-saga/effects';
import {projectType} from "../../action-type/actionTypeProject";

function* watchGetItemDeleteProject(id) {
    const dataProject = yield JSON.parse(localStorage.getItem('projects'));
    const task = yield  JSON.parse(localStorage.getItem('tasks'));
    const result = yield dataProject.filter(t => t.id !== id.payload);
    const taskResult = yield  task.filter((t) => t.projectId !== id.payload)
    localStorage.setItem('projects', JSON.stringify(result))
    localStorage.setItem('tasks', JSON.stringify(taskResult))
    yield put({
        type: projectType.SET_NUW_PROJECT_REDUCER,
        payload: result
    })
}

export default function* workerDeleteProject() {
    yield takeEvery(projectType.DELETE_PROJECT_ITEM, watchGetItemDeleteProject)
}