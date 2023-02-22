import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import membersReducer from "./membersReducer";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";
import commentReducer from "./commentReducer";

export const RootReducer = combineReducers({
    user: loginReducer,
    dataMembers: membersReducer,
    project: projectReducer,
    tasks: taskReducer,
    comment: commentReducer
})