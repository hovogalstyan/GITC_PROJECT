import {loginType} from "../action-type/actionTypeLogin";

export const getLoginItem = (item) => {
    return {
        type: loginType.GET_USER_LOGIN_ITEM,
        payload: item
    }
}

export const getUserData = (id) => {
    return {
        type: loginType.GET_USER_DATA,
        payload: id
    }
}

export const tokenUserFetch = () => {
    return {
        type: loginType.FETCH_TOKEN_ITEM_USER
    }
}
export const comeOutAdmin = (id) => {
    return {
        type: loginType.GET_ID_LOGIN_ADMIN,
        payload: id
    }
}