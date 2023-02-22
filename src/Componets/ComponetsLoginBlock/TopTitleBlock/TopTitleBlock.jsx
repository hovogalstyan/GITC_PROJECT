import React, {useEffect, useMemo, useState} from 'react';
import styles from './style.module.css';

const TopTitleBlock = () => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setToggle(true)
        }, 7000)
    }, [toggle]);
    const toggleActive = useMemo(() => {
        return toggle ? styles.toggle_effect : '';
    }, [toggle]);

    return (
        <div className={`${styles.top_title_block} ${toggleActive}`}>
            <span>L</span>
            <span>O</span>
            <span>G</span>
            <span>I</span>
            <span>N</span>
        </div>
    );
}

export default TopTitleBlock;