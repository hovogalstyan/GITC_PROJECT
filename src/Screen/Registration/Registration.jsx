import React, {useCallback, useMemo, useState} from 'react';
import {regEmil, regName, regPassword} from "../../Regex/Regex";
import InputCustom from "../../Componets/CompoentsCustom/InputCustom";
import IconBlock from "../../Componets/ComponetsLoginBlock/IconBlock/IconBlock";
import PasswordButton from "../../Componets/CompoentsCustom/PasswordButton";
import {BsCheck2} from "react-icons/bs";
import {erMessingDataLocal, erMessingEmail, erMessingName, erMessingPassword, erPasRetype} from "../../Regex/RegexText";
import {useDispatch, useSelector} from "react-redux";
import {addMembersReg} from "../../Store/action-creates/actionMembers";
import {membersData} from "../../Store/selectors/membersSelect";
import styles from './style.module.css';

const Registration = ({closModal}) => {
    const dispatch = useDispatch();
    const membersList = useSelector(membersData);
    const [passwordType, setPasswordType] = useState(false);
    const [errorMsName, setErrorMsName] = useState('');
    const [errorMsEmail, setErrorMsEmail] = useState('');
    const [errorMsPass, setErrorMsPass] = useState('');
    const [errorMsPassRetype, setErrorMsPassRetype] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passRetype, setPassRetype] = useState('');
    const closModalReg = useCallback(() => {
        setErrorMsName('')
        setErrorMsEmail('')
        setErrorMsPass('')
        setErrorMsPassRetype('')
        closModal(false)
    }, []);
    const exsEmail = useMemo(() => {
        return membersList.map((item) => {
            return item.email
        })
    }, [membersList]);
    const hideForm = useCallback((e) => {
        e.preventDefault()
        if (!regName.test(name)) {
            setErrorMsName(erMessingName)
        } else if (!regEmil.test(email)) {
            setErrorMsEmail(erMessingEmail)
            setErrorMsName('')
        } else if (!regPassword.test(pass)) {
            setErrorMsPass(erMessingPassword)
            setErrorMsEmail('')
        } else if (!regPassword.test(passRetype)) {
            setErrorMsPassRetype(erPasRetype)
            setErrorMsPass('')
        } else if (pass === passRetype) {
            setErrorMsPassRetype('')
            if (!exsEmail.includes(email)) {
                const newUser = {
                    id: Date.now(),
                    name: name,
                    email: email,
                    password: passRetype,
                    token: false
                }
                dispatch(addMembersReg(newUser));
                setName('')
                setEmail('')
                setPass('')
                setPassRetype('')
                setErrorMsEmail('')
                setErrorMsPass('')
                setErrorMsName('')
                setErrorMsPassRetype('')
                closModal(false)
            } else {
                setErrorMsEmail(erMessingDataLocal)
            }
        }
    }, [name, email, pass, passRetype, exsEmail]);

    const shoePasswordTypes = useCallback(() => {
        setPasswordType(!passwordType)
    }, [passwordType]);
    const toggle = useMemo(() => {
        return passwordType ? styles.all_type_active : ''
    }, [passwordType]);
    const typeInput = useMemo(() => {
        return passwordType ? 'text' : 'password'
    }, [passwordType]);
    return (
        <form className={styles.reg_form} onSubmit={hideForm}>
            <h3>Sing up</h3>
            <InputCustom styles={styles.reg_form_input} value={name} change={setName}
                         errorMessing={errorMsName} types={'text'} placeHold={'Name'}/>
            <InputCustom styles={styles.reg_form_input} value={email} change={setEmail}
                         errorMessing={errorMsEmail} types={'text'} placeHold={'Email'}/>
            <InputCustom styles={styles.reg_form_input} value={pass} change={setPass}
                         errorMessing={errorMsPass} types={typeInput} placeHold={'Password'}/>
            <InputCustom styles={styles.reg_form_input} value={passRetype} change={setPassRetype}
                         types={typeInput} errorMessing={errorMsPassRetype} placeHold={'Retype password'}/>
            <PasswordButton styles={styles.pas_type_button} title={'Accept the terms and policies'}
                            clickActive={shoePasswordTypes} toggleActive={toggle} icons={<BsCheck2/>}/>
            <button>Sing up</button>
            <IconBlock/>
            <div onClick={closModalReg} className={styles.clos_modal}>Sign in</div>
        </form>
    );
};

export default Registration;