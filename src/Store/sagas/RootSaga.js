import {all} from 'redux-saga/effects';
import workerLoginUser from "./login/loginSagas";
import workerRegistrationUser from "./mebers/registrationSaga";
import workerGetUserData from "./login/getUserDataFetch";
import workerGetTokenUser from "./login/tokenUserSaga";
import workerGetMembers from "./mebers/getMembers";
import workerComeOutSaga from "./login/comeOutSaga";
import workerMembersDelete from "./mebers/deleteMembers";
import workerGetItemUpdateMembersSaga from "./mebers/getItemUpdateMembres";
import workerMembersSearch from "./searchMembers";
import workerAddProject from "./project/addProject";
import workerAllProjectList from "./project/getProjectFetch";
import workerDeleteProject from "./project/deleteProject";
import workerGetItemEditProject from "./project/getItemProjectEditValue";
import workerMembersSaga from "./mebers/editeMembers";
import workerEditProject from "./project/editProject";
import workerTaskProjectItemDetalis from "./task/taskProjectItemValue";
import workerAddNewTask from "./task/addTask";
import workerEditTaskDate from "./task/editTaskDate";
import workerEditTask from "./task/editTaskItemValue";
import workerTaskDelete from "./task/deleteTask";
import workerFetchTask from "./task/filterProjectTask";
import workerGetItemTaskComment from "./coments/getItemTaskComents";
import workerAddComment from "./coments/addComment";


export default function* RootSaga() {
    yield all([
        workerLoginUser(),
        workerRegistrationUser(),
        workerGetUserData(),
        workerComeOutSaga(),
        workerMembersDelete(),
        workerGetItemUpdateMembersSaga(),
        workerMembersSaga(),
        workerGetMembers(),
        workerGetTokenUser(),
        workerMembersSearch(),
        workerAddProject(),
        workerAllProjectList(),
        workerDeleteProject(),
        workerGetItemEditProject(),
        workerEditProject(),
        workerTaskProjectItemDetalis(),
        workerAddNewTask(),
        workerEditTaskDate(),
        workerEditTask(),
        workerTaskDelete(),
        workerFetchTask(),
        workerGetItemTaskComment(),
        workerAddComment()
    ])
}