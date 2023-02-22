import React, {useCallback} from 'react';
import {AiFillCloseSquare} from "react-icons/ai";
import styles from '../style.module.css';
const CloseModal = ({closModal, setName,setDate, setDesc}) => {
    const closModalTask = useCallback(() => {
        closModal(false)
        setName('')
        setDesc('')
        setDate('')
    }, []);
    return (
        <div onClick={closModalTask} className={styles.clos_modal}>
            <AiFillCloseSquare/>
        </div>
    );
};

export default CloseModal;