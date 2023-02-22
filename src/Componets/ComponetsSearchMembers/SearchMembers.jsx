import React, {useEffect, useState} from 'react';
import InputCustom from "../CompoentsCustom/InputCustom";
import {useDispatch} from "react-redux";
import {getValueSearchText} from "../../Store/action-creates/actionMembers";
import styles from './style.module.css';

const SearchMembers = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    useEffect(()=>{
        dispatch(getValueSearchText(searchText))
    },[searchText])
    return (
        <form className={styles.search_members} >
            <InputCustom styles={styles.input_style} placeHold={'Members'} value={searchText} types={'text'}
                         change={setSearchText} errorMessing={''}/>
        </form>
    );
};

export default SearchMembers;