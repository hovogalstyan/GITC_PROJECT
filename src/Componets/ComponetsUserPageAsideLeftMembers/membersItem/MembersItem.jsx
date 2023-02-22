import React, {useCallback} from 'react';
import styles from './style.module.css';
import {useDispatch, useSelector} from "react-redux";
import {membersData} from "../../../Store/selectors/membersSelect";
import {AiFillDelete} from "react-icons/ai";
import {BsPencilSquare} from "react-icons/bs";
import {DeleteMemberItem, getItemMembersUpdate} from "../../../Store/action-creates/actionMembers";

const MembersItem = ({openUpdateModalMembers}) => {
    const members = useSelector(membersData);
    const dispatch = useDispatch();
    const deleteMembers = useCallback((id) => {
        dispatch(DeleteMemberItem(id))
    }, []);
    const openClickUpdate = useCallback((id) => {
        openUpdateModalMembers(true)
        dispatch(getItemMembersUpdate(id))
    }, []);
    return (
        <div className={styles.members_block}>
            {
                members.map((item) => {
                    return <div className={styles.members_item} key={item.id}>
                        <span>{item.name[0]}</span>
                        <p>{item.email}</p>
                        <div className={styles.icon_block}>
                            <small onClick={() => openClickUpdate(item.id)}><BsPencilSquare/></small>
                            {item.token !== true &&
                                <small onClick={() => deleteMembers(item.id)}><AiFillDelete/></small>}
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default MembersItem;