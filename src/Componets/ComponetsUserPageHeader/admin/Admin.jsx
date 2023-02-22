import React from 'react';
import styles from './style.module.css';
import {useSelector} from "react-redux";
import {userData} from "../../../Store/selectors/loginSelect";

const Admin = () => {
    const state = useSelector(userData);
    return (
        <div className={styles.admin_page}>
            {state.length !== 0 ? state.name[0] : null}
        </div>
    );
};

export default Admin;