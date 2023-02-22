import {taskType} from "../action-type/actionTypeTask";

export const getProjectItems = (taskId) => {
    return {
        type: taskType.ADD_TASK_PROJECT_ITEM_DETALISED,
        payload: taskId
    }
}
export const addTaskNewItem = (item) => {
    return {
        type: taskType.GET_ITEM_NEW_TASK,
        payload: item
    }
}

export const getIdProjectTaskFilter = () => {
    return {
        type: taskType.GET_FILTER_TASK_PROJECT_ITEM
    }
}

export const getItemEditeTask = (id) => {
    return {
        type: taskType.GET_ITEM_TASK_EDITE,
        payload: id
    }
}

export const getItemValueTaskEdit = (item) => {
    return {
        type: taskType.GET_ITEM_TASK_VALUE_EDIT,
        payload: item
    }
}

export const taskItemDelete = (id) => {
    return {
        type: taskType.GET_ITEM_TASK_DELETE,
        payload: id
    }
}