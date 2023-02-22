import React, {useCallback} from 'react';
import { AiFillCloseSquare } from "react-icons/ai";
import styles from './style.module.css'
const CloseModal = ({closModalComment}) => {
  const closetModal = useCallback(()=>{
      closModalComment(false)
  },[])
    return (
        <div onClick={closetModal} className={styles.close}>
            <AiFillCloseSquare/>
        </div>
    );
};

export default CloseModal;