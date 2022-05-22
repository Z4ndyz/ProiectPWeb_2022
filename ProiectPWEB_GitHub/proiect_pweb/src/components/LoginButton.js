import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Styles.module.css';

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    return (
        <button class={styles.btn} onClick={() => loginWithRedirect()}>
            Log In
        </button>
    )
}

export default LoginButton