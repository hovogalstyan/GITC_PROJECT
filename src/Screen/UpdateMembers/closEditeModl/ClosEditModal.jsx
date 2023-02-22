import React, {useCallback} from 'react';
import styles from '../style.module.css';
import { AiFillCloseSquare } from "react-icons/ai";
const ClosEditModal = ({closModalEdite,erEmail,erName,erPass}) => {
    const closModal = useCallback(()=>{
     closModalEdite(false)
        erName('')
        erPass('')
        erEmail('')
    },[])
    return (
        <div onClick={closModal} className={styles.close_edite_modal}>
          <AiFillCloseSquare/>
        </div>
    );
};

export default ClosEditModal;