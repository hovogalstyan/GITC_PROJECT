import {loginType} from "../action-type/actionTypeLogin";

const initialState = {
    data: [],
    login: false,
    errorMessing: null
}
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginType.SET_USER_ITEM_REDUCER: {
            return {
                ...state,
                login: true,
                data: action.payload,
                errorMessing: null
            }
        }
        case loginType.ERROR_MESSING_LOGIN_USER: {
            return {
                ...state,
                data: [],
                login: false,
                errorMessing: action.payload
            }
        }
        case loginType.SET_DATE_LOGIN_LOGOUT_REDUCER: {
            return {
                ...state,
                data: [],
                login: false,
                errorMessing: null
            }
        }
        default: {
            return state
        }
    }
}