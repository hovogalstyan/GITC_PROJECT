import React, {useEffect} from 'react';
import styles from './style.module.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {tokenUserFetch} from "../../Store/action-creates/actionLogin";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        navigate('/login')
    }, []);
    useEffect(() => {
        dispatch(tokenUserFetch())
    }, [dispatch])
    return (
        <div className={styles.home}>

        </div>
    );
};

export default Home;