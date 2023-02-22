import React, {useMemo} from 'react';
import CloseModal from "./CloseModal";
import LeftBlock from "./leftBlock/LeftBlock";
import RightBlock from "./RightBlock/RightBlock";
import styles from './style.module.css';
const CommentModal = ({closeModalComments,activeModal}) => {
    const toggle = useMemo(()=>{
        return activeModal ? styles.active_modal : '';
    },[activeModal]);
    return (
        <div className={`${styles.comment_modal} ${toggle}`}>
        <CloseModal closModalComment={closeModalComments}/>
        <LeftBlock/>
        <RightBlock/>
        </div>
    );
};

export default CommentModal;