import styles from './Modal.module.scss';

import Button from './Button';

const Modal = props => {
    const modalData = {
        title: props.title,
        text: props.text,
        buttonText: props.buttonText,
        type: props.type,
        isModalVisible: props.showModal
    };

    const onButtonClickHandler = (e) => {
        props.onModalButtonClick(e);
    }

    const onBackgroundClickHandler = () => {
        props.onCloseModalEvent();
    }

    // modal types: danger, info, success, warning

    return (
        <div className={`${styles['modal']} ${modalData.type ? styles[modalData.type] : styles.default} ${modalData.isModalVisible ? styles['visible'] : styles['invisible']}`}>
            <div className={styles['modal__tint']} onClick={onBackgroundClickHandler}></div>
            <div className={styles['modal-container']} >
                <div className={styles['modal-inner-container']}>
                    <div className={styles['modal-title']}>
                        <h4>{modalData.title}</h4>
                    </div>
                    <div className={styles['modal-text']}>
                        <p>{modalData.text}</p>
                    </div>
                    <div className={styles['modal-footer']}>
                        <Button
                            type="button"
                            text={modalData.buttonText}
                            onButtonClick={onButtonClickHandler}
                            theme={modalData.type}
                        ></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;