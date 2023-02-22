import React, {useCallback, useEffect, useMemo, useState} from 'react';
import InputCustom from "../../Componets/CompoentsCustom/InputCustom";
import {useDispatch, useSelector} from "react-redux";
import {membersData} from "../../Store/selectors/membersSelect";
import {editeTaskDate, parentProject} from "../../Store/selectors/taskSelect";
import {userData} from "../../Store/selectors/loginSelect";
import {addTaskNewItem, getIdProjectTaskFilter, getItemValueTaskEdit} from "../../Store/action-creates/actionTask";
import CloseModal from "../../Componets/ComponetsTaskPage/closModal/CloseModal";
import styles from './style.module.css';

const AddTask = ({closeModal, activeModal}) => {
    const projectItem = useSelector(parentProject);
    const admin = useSelector(userData);
    const members = useSelector(membersData);
    const editTaskDate = useSelector(editeTaskDate)
    const dispatch = useDispatch();
    const processArr = ['ToDo', 'In Process', 'Competed', 'Done'];
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [performer, setPerformer] = useState('');
    const [endDate, setEndDade] = useState('');
    const [process, setProcess] = useState('');
    const toggle = useMemo(() => {
        return activeModal ? styles.active_task : ''
    }, [activeModal])
    useEffect(() => {
        dispatch(getIdProjectTaskFilter())
    }, [dispatch]);
    useEffect(() => {
        setPerformer(admin.email)
        setProcess(processArr[0])
    }, [admin, setPerformer, setProcess]);
    useEffect(() => {
        if (editTaskDate.length !== 0) {
            setTaskName(editTaskDate.name)
            setTaskDesc(editTaskDate.description)
            setEndDade(editTaskDate.endDate)
            setPerformer(editTaskDate.performer)
            setProcess(editTaskDate.process)
        }
    }, [editTaskDate, setTaskName, setTaskDesc, setPerformer, setProcess, setEndDade]);
    const changeTaskDesc = useCallback((e) => {
        setTaskDesc(e.target.value)
    }, [taskDesc]);
    const changePerformer = useCallback((e) => {
        setPerformer(e.target.value)
    }, [performer]);
    const changeDate = useCallback((e) => {
        setEndDade(e.target.value)
    }, [endDate]);
    const changeProcess = useCallback((e) => {
        setProcess(e.target.value)
    }, [process]);
    const hideForm = useCallback((e) => {
        e.preventDefault();
        if (editTaskDate.length === 0) {
            if (taskName !== '' && taskDesc !== '' && endDate !== '') {
                const newTask = {
                    id: Math.floor(Math.random() * 1000),
                    name: taskName,
                    description: taskDesc,
                    performer: performer,
                    endDate: endDate,
                    process: process,
                    projectId: projectItem.id,
                    comment: []
                }
                dispatch(addTaskNewItem(newTask))
                closeModal(false)
                setTaskDesc('')
                setTaskName('')
                setEndDade('')
            }
        } else {
            const newEditeObj = {
                id: editTaskDate.id,
                name: taskName,
                description: taskDesc,
                endDate: endDate,
                performer: performer,
                process: process
            }
            dispatch(getItemValueTaskEdit(newEditeObj))
            setTaskDesc('')
            setTaskName('')
            setEndDade('')
            dispatch(getIdProjectTaskFilter())

        }
        closeModal(false)
    }, [taskName, taskDesc, performer, endDate, process, editTaskDate])
    return (
        <form className={`${styles.add_task} ${toggle}`} onSubmit={hideForm}>
            <CloseModal closModal={closeModal} setName={setTaskName} setDesc={setTaskDesc} setDate={setEndDade}/>
            <h2>Add Task</h2>
            <InputCustom styles={styles.input_style} value={taskName} placeHold={'Task name'} types={'text'}
                         errorMessing={''} change={setTaskName}/>
            <textarea value={taskDesc} onChange={changeTaskDesc} placeholder={'Description'}></textarea>
            <div className={styles.bottom_block}>
                <div>
                    <label>Performer</label>
                    <select value={performer} onChange={changePerformer}>
                        {
                            members.map((item) => {
                                return <option value={item.name} key={item.id}>
                                    {item.email}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <label>Date</label>
                    <input type={'date'} value={endDate} onChange={changeDate}/>
                </div>
                <div>
                    <label>Process</label>
                    <select onChange={changeProcess} value={process}>
                        {
                            processArr.map((item, i) => {
                                return <option key={i} value={item}>
                                    {item}
                                </option>
                            })
                        }
                    </select>
                </div>
            </div>
            <button>Add Task</button>
        </form>
    );
};

export default AddTask;