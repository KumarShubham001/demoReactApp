import styles from './UserDetails.module.scss';

import Card from '../UI/Card';

const UserDetails = props => {
    return (
        <div className={styles.UserDetails}>
            <Card>
                <h2>{props.userData.username}</h2>
                <p>{`${props.userData.age} years old.`}</p>
            </Card>
        </div>
    );
}

export default UserDetails;