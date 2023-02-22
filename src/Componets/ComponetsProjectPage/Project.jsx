import React, {useEffect, useState} from 'react';
import AddProjectButton from "./AddProjectButton/AddProjectButton";
import AddProject from "../../Screen/AddProject/AddProject";
import ProjectList from "./ProjectList/ProjectList";
import {useDispatch} from "react-redux";
import {projectFetch} from "../../Store/action-creates/actionProject";
import styles from './style.module.css';

const Project = () => {
    const [modalActive, setModalActive] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(projectFetch())
    }, [dispatch]);
    return (
        <div className={styles.project_pge}>
            <AddProjectButton openModal={setModalActive}/>
            <ProjectList setEditModal={setModalActive}/>
            <AddProject activeModal={modalActive} closeModal={setModalActive}/>
        </div>
    );
};

export default Project;