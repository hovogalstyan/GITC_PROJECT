import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {projectList} from "../../../Store/selectors/projectSelect";
import {AiFillDelete} from "react-icons/ai";
import {BsPencilFill} from "react-icons/bs";
import {GrTask} from "react-icons/gr";
import {getIdProjectDelete, getItemEditeReducer} from "../../../Store/action-creates/actionProject";
import {useNavigate} from "react-router-dom";
import styles from './style.module.css';

const ProjectList = ({setEditModal}) => {
    const navigate = useNavigate();
    const state = useSelector(projectList);
    const dispatch = useDispatch();
    const deleteProject = useCallback((id) => {
        dispatch(getIdProjectDelete(id))
    }, [state]);
    const editProject = useCallback((id) => {
        dispatch(getItemEditeReducer(id))
        setEditModal(true)
    }, [state]);
    const taskPage = useCallback((taskId) => {
        navigate(`addTask/${taskId}`)
    }, [state]);
    return (
        state.length !== 0 &&
        state.map((item) => {
            return <div key={item.id}
                        className={new Date(item.endDate) - new Date() > 0 ? styles.project_item : `${styles.project_item} ${styles.project_past}`}>
                <div className={styles.title_block}>
                    <h3>{item.name}</h3>
                </div>
                <p>{item.endDate}</p>
                <div className={styles.iconBlock}>
                    <li onClick={() => editProject(item.id)}><BsPencilFill/></li>
                    <li onClick={() => deleteProject(item.id)}><AiFillDelete/></li>
                    <li onClick={() => taskPage(item.id)}><GrTask/></li>
                </div>
            </div>
        })
    );
};

export default ProjectList;