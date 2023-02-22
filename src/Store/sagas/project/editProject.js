import {put, takeEvery} from 'redux-saga/effects';
import {projectType} from "../../action-type/actionTypeProject";

function* watchGetIdEditProject(project) {
    const dataProject = yield JSON.parse(localStorage.getItem('projects'));
    yield dataProject.forEach((item) => {
        if (item.id === project.payload.id) {
            console.log('<><><>',item)
            console.log('project',project.payload.endDate)
            item.name = project.payload.name
            item.endDate = project.payload.endDate
            item.task = project.payload.task
            return item
        }
    })

    yield put({
        type: projectType.SET_NUW_PROJECT_REDUCER,
        payload: dataProject
    })
    localStorage.setItem('projects', JSON.stringify(dataProject))
}

export default function* workerEditProject() {
    yield takeEvery(projectType.GET_EDIT_PROJECT_ITEM, watchGetIdEditProject)
}