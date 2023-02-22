import React from 'react';
import {useSelector} from "react-redux";
import {membersData} from "../../../Store/selectors/membersSelect";
import styles from './style.module.css';

const MembersList = () => {
    const state = useSelector(membersData)
    return (
        <div className={styles.members_list}>
            {
                state.map((item) => {
                    return <div key={item.id}>
                        <p>
                            {item.name[0]}
                        </p>
                    </div>
                })
            }
        </div>
    );
};

export default MembersList;