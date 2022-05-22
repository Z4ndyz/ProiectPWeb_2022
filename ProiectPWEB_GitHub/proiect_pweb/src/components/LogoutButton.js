import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Styles.module.css';

const LogoutButton = () => {
    const {logout} = useAuth0();

    return (
        <button class={styles.btn} onClick={() => logout()}>
            Log Out
        </button>
    )
}

export default LogoutButton