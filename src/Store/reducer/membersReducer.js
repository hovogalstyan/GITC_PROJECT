import {membersActionType} from "../action-type/actionTypeMembers";

const initialState = {
    members: [],
    updateMemberItem: [],

}
export default function membersReducer(state = initialState, action) {
    switch (action.type) {
        case membersActionType.SET_MEMBERS_REDUCER: {
            return {
                ...state,
                members: [...state.members, action.payload],
            }
        }
        case membersActionType.SET_NEW_DATE_LIST_FILTER_MEMBERS: {
            return {
                ...state,
                members: action.payload,
            }
        }
        case membersActionType.SET_NEW_DATE_EDITE_MEMBERS_LIST: {
            return {
                ...state,
                members: action.payload
            }
        }
        case membersActionType.SET_MEMBER_NEW_LIST: {
            return {
                ...state,
                updateMemberItem: action.payload
            }
        }
        default: {
            return state
        }
    }
}