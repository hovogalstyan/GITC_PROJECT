import {taskType} from "../action-type/actionTypeTask";

const initialState = {
    tasks: [],
    projectItem: [],
    editTask: [],
}
export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case taskType.SET_TASK_DETALISED_REDUCER: {
            return {
                ...state,
                projectItem: action.payload
            }
        }
        case taskType.SET_FILTER_TASK_REDUCER: {
            return {
                ...state,
                tasks: action.payload,
                editTask: []
            }
        }
        case taskType.SET_REDUCER_ALL_TASK: {
            return {
                ...state,
                tasks: action.payload,
                editTask: []
            }
        }
        case taskType.SET_TASK_EDIT_DATE_REDUCER: {
            return {
                ...state,
                editTask: action.payload
            }
        }
        default:
            return state

    }
}