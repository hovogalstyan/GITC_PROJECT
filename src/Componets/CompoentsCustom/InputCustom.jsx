import React, {useCallback} from 'react';

const InputCustom = ({styles, change, types, value, placeHold, icons, errorMessing}) => {
    const valueChange = useCallback((e) => {
        change(e.target.value)
    }, [value]);
    return (
        <div className={styles}>
            {icons !== undefined && <span>{icons}</span>}
            <input type={types}
                   onChange={valueChange}
                   value={value}
                   placeholder={placeHold}
                   autoComplete={'off'}
            />
            {errorMessing !== '' && <p>{errorMessing}</p>}
        </div>
    );
};

export default InputCustom;