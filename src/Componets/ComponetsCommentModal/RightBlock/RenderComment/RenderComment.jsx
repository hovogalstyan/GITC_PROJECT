import React from 'react';
import {useSelector} from "react-redux";
import {commentState} from "../../../../Store/selectors/taskSelect";
import styles from './style.module.css';

const RenderComment = () => {
    const commentArr = useSelector(commentState)
    return (
        <div className={styles.render_comment}>
            {commentArr.length !== 0 ?
                commentArr.comment.length !== 0 &&
                commentArr.comment.map((item, i) => {
                    return <div key={i} className={styles.coment_item}>
                        <span>{item.members}</span>
                        <p>{item.comment}</p>
                    </div>
                })
                : null
            }
        </div>
    );
};

export default RenderComment;