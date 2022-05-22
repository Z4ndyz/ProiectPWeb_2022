import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from './Styles.module.css';

function ErrorPage() {
    let navigate = useNavigate();
    return (
        <div class={styles.mainbackground}>
            <div class={styles.topnav}>
            <button class={styles.btn} onClick={() => {
                    navigate("/");
                }}>Home</button>
            </div>
            404 Page Not Found

        </div>
    )
}

export default ErrorPage