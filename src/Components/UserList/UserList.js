import styles from './UserList.module.scss'

import UserDetails from "./UserDetails";

const UserList = props => {
    // create all the user DOM elements
    if (props.userList.length > 0) {
        const userDOM = props.userList.map(user =>
            <UserDetails key={user.id} userData={user} />
        );

        return (
            <div className={styles.UserList}>
                {userDOM}
            </div>
        );
    } else {
        return <div className="emptyList">
            <p>No user exists, please create a new user.</p>
        </div>
    }
}

export default UserList;