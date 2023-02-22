import React from 'react';
import MembersList from "./membrsList/MembersList";
import Admin from "./admin/Admin";
import ComeOut from "./comeOut/comeOut";
import images from './1.jpg';
import styles from './style.module.css';
const Header = () => {
    return (
        <div className={styles.header}>
            <figure>
                <img src={images} alt=""/>
            </figure>
            <MembersList/>
            <Admin/>
            <ComeOut/>
        </div>
    );
};

export default Header;