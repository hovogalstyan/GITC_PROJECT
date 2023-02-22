import React, {useCallback} from 'react';
import {useSelector} from "react-redux";
import {parentProject} from "../../../Store/selectors/taskSelect";
import {MdBackspace} from "react-icons/md";
import {BiMessageAdd} from "react-icons/bi";
import styles from './style.module.css';

const TaskTopBlock = ({openModalAddTask}) => {
    const projectItem = useSelector(parentProject);
    const bake = useCallback(() => {
        window.history.go(-1)
    }, []);
    const openModal = useCallback(() => {
        openModalAddTask(true)
    }, []);

    return (
        <div className={styles.task_top_block}>
            <div onClick={bake}><span><MdBackspace/></span><p>Bake</p></div>
            {projectItem.length !== 0
                ? <div className={styles.project_items}>
                    <p>Project Name: {projectItem.name}</p>
                    <p>Project End Day: {projectItem.endDate}</p>
                </div>
                : null
            }
            <div className={styles.add_task} onClick={openModal}>
                <p>Add task project for: <span>{projectItem.name}</span><small><BiMessageAdd/></small></p>
            </div>
        </div>
    );
};

export default TaskTopBlock;