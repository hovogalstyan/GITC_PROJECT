import React, {useCallback} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {BiLogIn} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {comeOutAdmin} from "../../../Store/action-creates/actionLogin";
import styles from '../style.module.css';
const ComeOut = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const out = useCallback(() => {
        dispatch(comeOutAdmin(id))
        Navigate('/login')
    }, []);
    return (
        <div onClick={out} className={styles.come_out}>
            <span><BiLogIn/></span>
            <p>Come Out</p>

        </div>
    );
};

export default ComeOut;