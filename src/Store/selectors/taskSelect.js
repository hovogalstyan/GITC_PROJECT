export const parentProject = (state) => {
    return state.tasks.projectItem
}

export const taskList = (state) => {
    return state.tasks.tasks
}

export const editeTaskDate = (state) => {
    return state.tasks.editTask
}

export const commentState = (state) => {
    return state.comment.cometsTask
}