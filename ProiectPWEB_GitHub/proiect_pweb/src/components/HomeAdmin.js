import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import AdminRouteProtection from './AdminRouteProtection';
import styles from './Styles.module.css';

const HomeAdmin = () => {
    AdminRouteProtection();
    let navigate = useNavigate();
    return (
        <div class={styles.mainbackground}>
        <div class={styles.topnav}>
                <button class={styles.btn} onClick={() => {
                    navigate("/HomeAdmin");
                }}>Home</button>
                <button class={styles.btn} onClick={() => {
                    navigate("/AdminNews");
                }}>News</button>
            <button class={styles.btn} onClick={() => {
                    navigate("/AdminSafeLocations");
                }}>Safe Locations</button>
            <button class={styles.btn}  onClick={() => {
                    navigate("/AdminFundraisers");
                }}>Fundraisers</button>
            <button class={styles.btn} onClick={() => {
                    navigate("/AdminAlerts");
                }}>Alerts</button>
            <button class={styles.btn} onClick={() => {
                    navigate("/AdminRequests");
                }}>User Requests</button>
			<button class={styles.btn} onClick={() => {
                    navigate("/Contact");
                }}>Contact</button>
            <LogoutButton />
            <p></p>
            <button class={styles.btn} onClick={() => {
                    navigate("/Profile");
                }}>View Profile</button>
                </div>
        </div>
    )
}

export default HomeAdmin;