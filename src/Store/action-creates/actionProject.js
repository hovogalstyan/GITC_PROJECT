import {projectType} from "../action-type/actionTypeProject";

export const projectFetch = () => {
    return {
        type: projectType.GET_START_PROJECT_FETCH
    }
}
export const getItemNewProject = (item) => {
    return {
        type: projectType.ADD_NEW_PROJECT,
        payload: item
    }
}
export const getIdProjectDelete = (id) => {
    return {
        type: projectType.DELETE_PROJECT_ITEM,
        payload: id
    }
}
export const getItemEditeReducer = (id) => {
    return {
        type: projectType.GET_ID_PROJECT_EDITE,
        payload: id
    }
}

export const getItemValueEditProject = (item) => {
    return {
        type: projectType.GET_EDIT_PROJECT_ITEM,
        payload: item
    }
}