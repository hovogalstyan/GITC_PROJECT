import React, {useMemo} from 'react';
import Registration from "../../Screen/Registration/Registration";
import styles from './style.module.css';

const RegistrBlock = ({openModal, setOpenModal}) => {
    const toggle = useMemo(() => {
        return openModal ? styles.active : '';
    }, [openModal])
    return (
        <div className={`${styles.regist_block} ${toggle}`}>
            <Registration closModal={setOpenModal} openModal={openModal}/>
        </div>
    );
};

export default RegistrBlock;