import {projectType} from "../action-type/actionTypeProject";
const initialState = {
    projectData: [],
    editProject: []
}
export default function projectReducer(state=initialState,action){
    switch (action.type){
        case projectType.SET_NUW_PROJECT_REDUCER:{
            return {
                ...state,
                projectData: action.payload,
                editProject: []
            }
        }
        case projectType.SET_ITEM_PROJECT_REDUCER_EDITE:{
            return {
                ...state,
                editProject: action.payload
            }
        }
        default:{
            return state
        }
    }
}