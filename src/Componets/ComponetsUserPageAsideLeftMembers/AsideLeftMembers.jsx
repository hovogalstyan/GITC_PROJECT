import React, {useState} from 'react';
import RegistrBlock from "../ComponetsRegistration/RegistrBlock";
import AddMembersButton from "./addMembersButton/AddMembersButton";
import MembersItem from "./membersItem/MembersItem";
import UpdateMembers from "../../Screen/UpdateMembers/UpdateMembers";
import SearchMembers from "../ComponetsSearchMembers/SearchMembers";
import styles from './style.module.css';

const AsideLeftMembers = () => {
    const [openModalReg, setOpenModalReg] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    return (
        <div className={styles.members}>
            <SearchMembers/>
            <p className={styles.title}>Members</p>
            <AddMembersButton openModal={setOpenModalReg}/>
            <RegistrBlock openModal={openModalReg} setOpenModal={setOpenModalReg}/>
            <MembersItem openUpdateModalMembers={setOpenUpdateModal}/>
            <UpdateMembers setModal={setOpenUpdateModal} openUpdateModalActive={openUpdateModal}/>
        </div>
    );
};

export default AsideLeftMembers;