import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getUserData} from "../../Store/action-creates/actionLogin";
import {Outlet, useParams} from "react-router-dom";
import Header from "../ComponetsUserPageHeader/Header";
import AsideLeftMembers from "../ComponetsUserPageAsideLeftMembers/AsideLeftMembers";
import {fetchMembers} from "../../Store/action-creates/actionMembers";
import styles from './style.module.css';
const UserPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserData(id))
    }, [id]);
    useEffect(() => {
        return () => {
            dispatch(fetchMembers())
        }
    }, [dispatch]);
    return (
        <div className={styles.user_page}>
            <Header/>
            <AsideLeftMembers/>
            <Outlet/>
        </div>
    );
};
export default UserPage;