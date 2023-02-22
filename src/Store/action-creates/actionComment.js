import {commentType} from "../action-type/actionComentType";

export const getItemTask = (id) => {
    return {
        type: commentType.GET_ID_TASK_ITEM,
        payload: id
    }
}
export const getTextValueComment = (com) => {
    return {
        type: commentType.GET_TEXT_VALUE_COMMENT,
        payload: com
    }
}