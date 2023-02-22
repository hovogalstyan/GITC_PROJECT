import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTextValueComment} from "../../../../Store/action-creates/actionComment";
import {userData} from "../../../../Store/selectors/loginSelect";
import styles from './style.module.css';
const AddComment = () => {
    const [commentValue, setCommentValue] = useState('');
    const members = useSelector(userData);
    const dispatch = useDispatch();
    const changeComment = useCallback((e) => {
        setCommentValue(e.target.value)
    }, [commentValue]);
    const hideForm = useCallback((e) => {
        e.preventDefault()
        if (commentValue !== '') {
            const nueObj = {
                comment: commentValue,
                members: members.name
            }
            dispatch(getTextValueComment(nueObj))
            setCommentValue('')
        }
    }, [commentValue])
    return (
        <form className={styles.add_comment} onSubmit={hideForm}>
            <textarea placeholder={'Comment'} value={commentValue} onChange={changeComment}/>
            <button>Add Comment</button>
        </form>
    );
};

export default AddComment;