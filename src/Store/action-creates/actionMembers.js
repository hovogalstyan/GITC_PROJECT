import {membersActionType} from "../action-type/actionTypeMembers";

export const addMembersReg = (item) => {
    return {
        type: membersActionType.ADD_NEW_MEMBERS_REDUCER,
        payload: item
    }
}
export const DeleteMemberItem = (id) => {
    return {
        type: membersActionType.GET_ID_DELETE_MEMBERS_ITEM,
        payload: id
    }
}
export const getItemMembersUpdate = (id) => {
    return {
        type: membersActionType.GET_ITEM_EDIT_MEMBERS,
        payload: id
    }
}

export const editMembers = (id, name, email, password) => {
    return {
        type: membersActionType.EDITE_MEMBERS_ITEM,
        payload: {
            id,
            name,
            email,
            password,

        }
    }
}
export const getValueSearchText = (text) => {
    return {
        type: membersActionType.GET_SEARCH_TEXT_VALUE,
        payload: text
    }
}
export const fetchMembers = () => {
    return {
        type: membersActionType.START_FETCH_MEMBERS
    }
}