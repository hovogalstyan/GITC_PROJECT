import {commentType} from "../action-type/actionComentType";

const initialState = {
    cometsTask: []
}
export default function commentReducer(state = initialState, action) {
    switch (action.type) {
        case commentType.SET_TASK_ITEM_REDUCER: {
            return {
                ...state,
                cometsTask: action.payload
            }
        }
        case commentType.SET_COMMENT_TASK_ITEM: {
            return {
                ...state,
                cometsTask: action.payload
            }
        }
        default: {
            return state
        }
    }
}