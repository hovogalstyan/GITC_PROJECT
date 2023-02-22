import React, {useEffect, useState} from 'react';
import TaskItemBlock from "./TaskItemBlock/TaskItemBlock";
import TaskTopBlock from "./TaskTopBlock/TaskTopBlock";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getIdProjectTaskFilter, getProjectItems} from "../../Store/action-creates/actionTask";
import AddTask from "../../Screen/AddTask/AddTask";
import {taskList} from "../../Store/selectors/taskSelect";
import CommentModal from "../ComponetsCommentModal/CommentModal";
import styles from './style.module.css';

const TaskPage = () => {
    const [addTaskModal, setAddTaskModal] = useState(false);
    const [commentModal, setCommentModal] = useState(false);
    const state = useSelector(taskList);
    const dispatch = useDispatch();
    const {taskId} = useParams();
    useEffect(() => {
        dispatch(getProjectItems(taskId))
    }, [taskId, dispatch]);
    useEffect(() => {
        dispatch(getIdProjectTaskFilter());
    }, [dispatch]);
    return (
        <div className={styles.task_page}>
            <AddTask closeModal={setAddTaskModal} activeModal={addTaskModal}/>
            <CommentModal activeModal={commentModal} closeModalComments={setCommentModal}/>
            <TaskTopBlock openModalAddTask={setAddTaskModal}/>
            <TaskItemBlock openModalComent={setCommentModal} openModal={setAddTaskModal} state={state} title={'ToDo'}/>
            <TaskItemBlock openModalComent={setCommentModal} openModal={setAddTaskModal} state={state}
                           title={'In Process'}/>
            <TaskItemBlock openModalComent={setCommentModal} openModal={setAddTaskModal} state={state}
                           title={'Competed'}/>
            <TaskItemBlock openModalComent={setCommentModal} openModal={setAddTaskModal} state={state} title={'Done'}/>
        </div>
    );
};

export default TaskPage;