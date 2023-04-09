import styles from './Button.module.scss';

const Button = (props) => {
    const onClickHandler = (event) => {
        props.onButtonClick(event);
    }

    return (
        <button type={props.type} className={`${styles.button} ${props.theme ? styles[props.theme] : styles.default}`} onClick={onClickHandler} >
            {props.text}
        </button>
    );
}

export default Button;

