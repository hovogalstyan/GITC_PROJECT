
const PasswordButton = ({styles, title, icons, toggleActive, clickActive}) => {
    return (
        <div onClick={clickActive} className={`${styles} ${toggleActive}`}>
            <div>
                <span>{icons}</span>
            </div>
            <p>{title}</p>
        </div>
    );
};

export default PasswordButton;