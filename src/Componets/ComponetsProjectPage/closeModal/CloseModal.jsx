import React, {useCallback} from 'react';
import {AiOutlineCloseSquare} from "react-icons/ai";
import styles from '../style.module.css';

const CloseModal = ({closProjectModal, setDate, setTask, setName}) => {
    const closModal = useCallback(() => {
        closProjectModal(false);
        setTask('')
        setName('')
        setDate('')
    }, []);
    return (
        <div onClick={closModal} className={styles.close_modal}>
            <AiOutlineCloseSquare/>
        </div>
    );
};

export default CloseModal;