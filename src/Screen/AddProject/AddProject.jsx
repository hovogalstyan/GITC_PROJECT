import React, {useCallback, useEffect, useMemo, useState} from 'react';
import InputCustom from "../../Componets/CompoentsCustom/InputCustom";
import CloseModal from "../../Componets/ComponetsProjectPage/closeModal/CloseModal";
import {useDispatch, useSelector} from "react-redux";
import {getItemNewProject, getItemValueEditProject} from "../../Store/action-creates/actionProject";
import {editeProject} from "../../Store/selectors/projectSelect";
import styles from './style.module.css';

const AddProject = ({activeModal, closeModal}) => {
    const dispatch = useDispatch();
    const editData = useSelector(editeProject);
    const [projectName, setProjectName] = useState('');
    const [projectTask, setProjectTask] = useState('');
    const [projectDate, setProjectDate] = useState('');
    const changeTask = useCallback((e) => {
        setProjectTask(e.target.value)
    }, [projectTask]);
    const changeDate = useCallback((e) => {
        setProjectDate(e.target.value)
    }, [projectDate])
    const toggle = useMemo(() => {
        return activeModal ? styles.modal_active : ''
    }, [activeModal]);
    useEffect(() => {
        if (editData.length !== 0) {
            setProjectName(editData.name)
            setProjectTask(editData.task)
            setProjectDate(editData.endDate)
        }

    }, [editData, setProjectTask, setProjectDate, setProjectName])
    const hidForm = useCallback((e) => {
        e.preventDefault()
        if (editData.length === 0) {
            if (projectDate !== '' && projectTask !== '' && projectName !== '') {
                const newData = {
                    id: Math.floor(Math.random() * 15780),
                    name: projectName,
                    task: projectTask,
                    endDate: projectDate,
                }
                dispatch(getItemNewProject(newData));
                setProjectDate('')
                setProjectTask('')
                setProjectName('')
                closeModal(false)
            }
        } else {
            const editProject = {
                id: editData.id,
                name: projectName,
                task: projectTask,
                endDate: projectDate,
            }
            setProjectDate('')
            setProjectTask('')
            setProjectName('')
            dispatch(getItemValueEditProject(editProject))
            closeModal(false)
        }

    }, [projectDate, projectName, projectTask, editData])
    return (
        <div className={`${styles.add_project_modal} ${toggle}`}>
            <CloseModal closProjectModal={closeModal} setName={setProjectName} setTask={setProjectTask}
                        setDate={setProjectDate}/>
            <form onSubmit={hidForm}>
                <h2>Add Project</h2>
                <InputCustom styles={styles.input_style} change={setProjectName} value={projectName} errorMessing={''}
                             types={'text'} placeHold={'Project Name'}/>
                <textarea value={projectTask} onChange={changeTask} placeholder={'Task'}></textarea>
                <input type={'date'} value={projectDate} onChange={changeDate}/>
                <button>Add Project</button>
            </form>
        </div>
    );
};

export default AddProject;