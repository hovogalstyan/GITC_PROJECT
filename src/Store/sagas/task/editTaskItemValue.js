import {takeEvery} from 'redux-saga/effects';
import {taskType} from "../../action-type/actionTypeTask";

function* watchGetItemTaskEdit(item) {
    const data = item.payload;
    const task = yield JSON.parse(localStorage.getItem('tasks'));
    yield task.forEach((item) => {
        if (item.id === data.id) {
            item.name = data.name
            item.description = data.description
            item.endDate = data.endDate
            item.performer = data.performer
            item.process = data.process
        }
    })
    localStorage.setItem('tasks', JSON.stringify(task));
}

export default function* workerEditTask() {
    yield takeEvery(taskType.GET_ITEM_TASK_VALUE_EDIT, watchGetItemTaskEdit)
}