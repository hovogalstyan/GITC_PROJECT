import {useCallback, useMemo, useState} from "react";
import styles from './style.module.css';

const AddProjectButton = ({openModal}) => {
    const [toggle, setToggle] = useState(false);
    setTimeout(() => {
        setToggle(true)
    }, 1200);
    const active = useMemo(() => {
        return toggle ? styles.active : '';
    }, [toggle]);
    const openAddProject = useCallback(() => {
        openModal(true)
    }, []);
    return (
        <div className={styles.add_project}>
            <button onClick={openAddProject} className={active}>Add Project</button>
        </div>
    );
};

export default AddProjectButton;