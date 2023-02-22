import React, {useCallback, useEffect, useMemo, useState} from 'react';
import InputCustom from "../../Componets/CompoentsCustom/InputCustom";
import {FaUserAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";
import {memberItemData, membersData} from "../../Store/selectors/membersSelect";
import {regEmil, regName, regPassword} from "../../Regex/Regex";
import {erMessingDataLocal, erMessingEmail, erMessingName, erMessingPassword} from "../../Regex/RegexText";
import {editMembers} from "../../Store/action-creates/actionMembers";
import PasswordButton from "../../Componets/CompoentsCustom/PasswordButton";
import {BsCheck2} from "react-icons/bs";
import ClosEditModal from "./closEditeModl/ClosEditModal";
import styles from './style.module.css';
const UpdateMembers = ({setModal, openUpdateModalActive}) => {
    let status = false;
    const dispatch = useDispatch();
    const members = useSelector(memberItemData);
    const membersList = useSelector(membersData);
    const [editPasswordType, setEditPasswordType] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const passwordType = useMemo(() => {
        return editPasswordType ? 'text' : 'password'
    }, [editPasswordType]);
    const showPassTypeEdit = useCallback(() => {
        setEditPasswordType(!editPasswordType)
    }, [editPasswordType]);
    const toggleButton = useMemo(() => {
        return editPasswordType ? styles.active_button : ''
    }, [editPasswordType])
    useEffect(() => {
        if (members.length !== 0) {
            setName(members.name)
            setEmail(members.email)
            setPassword(members.password)
        }
    }, [members, setName, setEmail, setPassword]);
    const exsEmail = useMemo(() => {
        return membersList.map((item) => {
            return item.email
        })
    }, [membersList]);
    const toggle = useMemo(() => {
        return openUpdateModalActive ? styles.active : ''
    }, [openUpdateModalActive]);
    const hideForm = useCallback((e) => {
        e.preventDefault()
        if (!regName.test(name)) {
            setErrorName(erMessingName)
        } else if (!regEmil.test(email)) {
            setErrorName('')
            setErrorEmail(erMessingEmail)
        } else if (!regPassword.test(password)) {
            setErrorEmail('')
            setErrorPassword(erMessingPassword)
        } else {
            status = !status
        }
        if (status === true) {
            setErrorName('')
            setErrorEmail('')
            setErrorPassword('')
            if (!exsEmail.includes(email)) {
                dispatch(editMembers(members.id, name, email, password))
                setModal(false)
            } else {
                setErrorEmail(erMessingDataLocal)
            }
            if (members.email === email) {
                dispatch(editMembers(members.id, name, members.email, password))
                setModal(false)
                setErrorEmail('');
            }
        }
    }, [name, email, password, exsEmail, status]);
    return (
        <div className={`${styles.edite_block} ${toggle}`}>
            <form className={`${styles.update_members}`} onSubmit={hideForm}>
                <ClosEditModal closModalEdite={setModal} erName={setErrorName} erEmail={setErrorEmail}
                               erPass={setErrorPassword}/>
                <InputCustom styles={styles.input_styles} value={name} types={'text'} placeHold={'Name'}
                             errorMessing={errorName}
                             change={setName}
                             icons={<FaUserAlt/>}/>
                <InputCustom styles={styles.input_styles} types={'text'} placeHold={'Email'} value={email}
                             errorMessing={errorEmail}
                             change={setEmail}
                             icons={<MdEmail/>}/>
                <InputCustom styles={styles.input_styles} types={passwordType} placeHold={'Password'} value={password}
                             errorMessing={errorPassword} change={setPassword} icons={<RiLockPasswordFill/>}/>
                <PasswordButton styles={styles.edit_password} icons={<BsCheck2/>} clickActive={showPassTypeEdit}
                                toggleActive={toggleButton} title={'show password'}/>
                <button>Update</button>
            </form>
        </div>
    );
};

export default UpdateMembers;