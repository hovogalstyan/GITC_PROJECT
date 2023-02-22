import React from 'react';
import {IoIosAddCircleOutline} from "react-icons/io";
import styles from './style.module.css';

const AddMembersButton = ({openModal}) => {
    return (
        <div className={styles.add_members}>
            <span><IoIosAddCircleOutline/></span>
            <p onClick={openModal}>Add Member</p>
        </div>
    );
};

export default AddMembersButton;