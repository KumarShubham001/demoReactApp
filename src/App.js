import { useState } from 'react';

import './App.scss';

import NewUserForm from './Components/NewUserForm/NewUserForm';
import UserList from './Components/UserList/UserList';
import Modal from './Components/UI/Modal';

const defaultUserList = [];
const defaultModalData = {
  showModal: false,
  type: '',
  title: '',
  text: '',
  buttonText: '',
}

function App() {

  const [userList, updateUserList] = useState(defaultUserList);
  const [modalData, setModalData] = useState(defaultModalData);

  // new user created event handler
  const newUserHandler = (user) => {
    updateUserList(prevState => [
      user,
      ...prevState
    ])
  }

  // show modal handler
  const showModalHandler = (newData) => {
    setModalData({
      ...newData,
      showModal: true
    });
  }

  // hide modal handler
  const hideModalHandler = () => {
    setModalData((prevData) => {
      return ({
        ...prevData,
        showModal: false
      })
    });
  }

  // event listner on form error input
  const onErrorInput = () => {
    console.log('error input')
    showModalHandler({
      title: 'Invalid Input!',
      text: 'Please enter valid inputs for the user fields.',
      buttonText: 'OK',
      type: 'danger'
    })
  }

  // event listener for the modal button click
  const modalButtonClickHandler = (e) => {
    e.preventDefault();
    hideModalHandler();
  }

  return (
    <div className="app">
      <h1>Welcome.</h1>
      <NewUserForm
        onNewUserAdded={newUserHandler}
        onErrorInput={onErrorInput}
      />
      <h3>All users</h3>
      <UserList userList={userList} />
      {
        modalData.showModal && (
          <Modal
            type={modalData.type}
            showModal={modalData.showModal}
            title={modalData.title}
            text={modalData.text}
            buttonText={modalData.buttonText}
            onModalButtonClick={modalButtonClickHandler}
            onCloseModalEvent={hideModalHandler}
          />
        )
      }
    </div>
  );
}

export default App;
