import React, {useCallback, useMemo, useState} from 'react';
import InputCustom from "../../Componets/CompoentsCustom/InputCustom";
import {FiUser} from "react-icons/fi";
import TopTitleBlock from "../../Componets/ComponetsLoginBlock/TopTitleBlock/TopTitleBlock";
import {RiLockPasswordLine} from "react-icons/ri";
import IconBlock from "../../Componets/ComponetsLoginBlock/IconBlock/IconBlock";
import {regEmil, regPassword} from "../../Regex/Regex";
import {erMessingEmail, erMessingPassword, erMessingDataLocal} from "../../Regex/RegexText";
import {useDispatch, useSelector} from "react-redux";
import {getLoginItem} from "../../Store/action-creates/actionLogin";
import PasswordButton from "../../Componets/CompoentsCustom/PasswordButton";
import {BsCheck2} from "react-icons/bs";
import {userDateError} from "../../Store/selectors/loginSelect";
import styles from './styles.module.css';

const Login = () => {
    const dispatch = useDispatch();
    const dateLocalErrorMessing = useSelector(userDateError);
    const [passwordType, setPasswordType] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msError, setMsError] = useState({msEmail: '', msPassword: ''});
    const hideForm = useCallback((e) => {
        e.preventDefault()
        if (!regEmil.test(email)) {
            setMsError({msEmail: erMessingEmail, msPassword: ''})
        } else if (!regPassword.test(password)) {
            setMsError({msEmail: '', msPassword: erMessingPassword})
        } else {
            setMsError({msEmail: '', msPassword: ''})
            const user = {
                email: email,
                password: password
            }
            dispatch(getLoginItem(user))
        }
    }, [email, password]);
    const showPasswordClick = useCallback(() => {
        setPasswordType(!passwordType)
    }, [passwordType]);
    const toggleType = useMemo(() => {
        return passwordType ? styles.type_active : '';
    }, [passwordType]);
    const showType = useMemo(() => {
        return passwordType ? 'text' : 'password';
    }, [passwordType]);
    return (
        <div className={styles.login}>
            <TopTitleBlock/>
            {dateLocalErrorMessing === 'noneData' && <div className={styles.error_local}>{erMessingDataLocal}</div>}
            <form onSubmit={hideForm}>
                <InputCustom styles={styles.input_style} types={'text'} icons={<FiUser/>} placeHold={'Email'}
                             value={email} change={setEmail} errorMessing={msError.msEmail}/>
                <InputCustom styles={styles.input_style} types={showType} icons={<RiLockPasswordLine/>} value={password}
                             placeHold={'Password'} change={setPassword} errorMessing={msError.msPassword}/>
                <PasswordButton styles={styles.pass_type} title={"Show password"} icons={<BsCheck2/>}
                                clickActive={showPasswordClick} toggleActive={toggleType}/>
                <button>Sing ap</button>
            </form>
            <div className={styles.icon_block}>
                <IconBlock/>
            </div>
        </div>
    );
};

export default Login;