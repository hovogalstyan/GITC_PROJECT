import React, {useEffect} from 'react';
import styles from './style.module.css';
import anmVideo from './images/Abstract - 75472.mp4'
import AsideLeftImages from "./AsidLeftImages/AsideLeftImages";
import Login from "../../Screen/Login/Login";
import {useSelector} from "react-redux";
import {userIsLogin} from "../../Store/selectors/loginSelect";
import {useNavigate} from "react-router-dom";

const LoginBlock = () => {
    const userData = useSelector(userIsLogin)
    const Navigate = useNavigate()
    useEffect(() => {
        if (userData.login) {
            Navigate(`/user.com/${userData.data.id}`)
        }
    }, [userData]);
    return (
        <div className={styles.login_block}>
            <video src={anmVideo} autoPlay loop muted/>
            <div className={styles.container_login}>
                <AsideLeftImages/>
                <Login/>
            </div>
        </div>
    );
};

export default LoginBlock;