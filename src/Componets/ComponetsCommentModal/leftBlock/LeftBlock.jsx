import React from 'react';
import {useSelector} from "react-redux";
import {commentState} from "../../../Store/selectors/taskSelect";
import styles from './style.module.css';

const LeftBlock = () => {
    const state = useSelector(commentState);

    return (
        state.length !== 0
            ? <div className={styles.left_block}>
                <div>
                    <label>Task Name</label>
                    <p>{state.name}</p>
                </div>
                <div>
                    <label>Description</label>
                    <p>{state.description}</p>
                </div>
                <div>
                    <label>Date</label>
                    <p>{state.endDate}</p>
                </div>
                <div>
                    <label>Performer</label>
                    <p>{state.performer}</p>
                </div>
                <div>
                    <label>Process</label>
                    <p>{state.process}</p>
                </div>
            </div>
            : null
    );
};

export default LeftBlock;