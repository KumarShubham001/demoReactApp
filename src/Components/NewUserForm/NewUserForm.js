import { useState } from 'react';

import Button from '../UI/Button';
import FormInput from '../UI/FormInput';

const NewUserForm = (props) => {

    const [formData, setFormData] = useState({
        username: '',
        age: '',
    })

    const [usernameErr, setUsernameErrStatus] = useState(false);
    const [ageErr, setAgeErrStatus] = useState(false);

    const setUsername = (value) => {
        if (usernameErr && value) {
            setUsernameErrStatus(false);
        }

        setFormData(prevValue => {
            return {
                ...prevValue,
                username: value.trim()
            }
        })
    }

    const setAge = (value) => {
        if (ageErr && value) {
            setAgeErrStatus(false);
        }

        setFormData(prevValue => {
            return {
                ...prevValue,
                age: String(value).trim()
            }
        })
    }

    const onSubmitClickHandler = (e) => {
        e.preventDefault();

        if (formData.username && formData.age) {
            const newUserData = {
                id: new Date().toISOString(),
                ...formData
            };

            console.log(newUserData);
            props.onNewUserAdded(newUserData);
            resetForm();
        } else {
            props.onErrorInput();

            if (formData.username.length === 0) {
                setUsernameErrStatus(true);
            }

            if (formData.age.length === 0) {
                setAgeErrStatus(true);
            }
        }
    }

    const resetForm = () => {
        setFormData({
            username: '',
            age: '',
        })
    }

    return (
        <div className=''>
            <FormInput
                id='username'
                label='User Name'
                placeholder=''
                type='text'
                value={formData.username}
                onValueChange={setUsername}
                error={usernameErr}
            />
            <FormInput
                id='age'
                label='Age'
                placeholder=''
                type='number'
                value={formData.age}
                onValueChange={setAge}
                error={ageErr}
            />
            <Button
                type="submit"
                text="Add user"
                onButtonClick={onSubmitClickHandler}
            />
        </div>
    );
}

export default NewUserForm;

