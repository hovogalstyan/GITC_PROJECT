import React from 'react';
import AddComment from "./AddComment/AddComment";
import RenderComment from "./RenderComment/RenderComment";
import styles from './style.module.css';

const RightBlock = () => {
    return (
        <div className={styles.right_block}>
            <RenderComment/>
            <AddComment/>
        </div>
    );
};

export default RightBlock;