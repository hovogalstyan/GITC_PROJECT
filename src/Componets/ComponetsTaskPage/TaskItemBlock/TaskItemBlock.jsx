import React, {useCallback} from 'react';
import {AiFillDelete} from "react-icons/ai";
import {BsPencilFill} from "react-icons/bs";
import {BiCommentAdd} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {getItemEditeTask, taskItemDelete} from "../../../Store/action-creates/actionTask";
import {getItemTask} from "../../../Store/action-creates/actionComment";
import styles from './/style.module.css';

const TaskItemBlock = ({title, state, openModal, openModalComent}) => {
    const dispatch = useDispatch();
    const editTask = useCallback((id) => {
        openModal(true)
        dispatch(getItemEditeTask(id))
    }, [state]);
    const deleteTask = useCallback((id) => {
        dispatch(taskItemDelete(id))
    }, [state]);
    const comment = useCallback((id) => {
        openModalComent(true)
        dispatch(getItemTask(id))
    }, [state]);
    return (
        <div className={styles.task_item}>
            <h2>{title}</h2>
            {
                state.length !== 0 && state.map((item) => {
                    return item.process === title
                        ? <div key={item.id} className={new Date(item.endDate) - new Date() > 0 ? styles.task_item_style:`${styles.task_end_date} ${styles.task_item_style}`}>
                            <p>Task Name: {item.name}</p>
                            <p>Task Performer:{item.performer}</p>
                            <ul>
                                <li onClick={() => editTask(item.id)}><BsPencilFill/></li>
                                <li onClick={() => deleteTask(item.id)}><AiFillDelete/></li>
                                <li onClick={() => comment(item.id)}><BiCommentAdd/></li>
                            </ul>
                        </div>
                        : null
                })
            }
        </div>
    );
};

export default TaskItemBlock;