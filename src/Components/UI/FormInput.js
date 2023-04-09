import styles from './FormInput.module.scss';

const FormInput = (props) => {
    const onValueChangeHandler = (event) => {
        props.onValueChange(event.target.value);
    }
    return (
        <div className={`${styles.FormInput} ${props.error && styles.invalidField}`}>
            <label htmlFor={props.id} >{props.label}</label>
            <input
                id={props.id}
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                onChange={onValueChangeHandler}
            />
        </div>
    );
}

export default FormInput;

