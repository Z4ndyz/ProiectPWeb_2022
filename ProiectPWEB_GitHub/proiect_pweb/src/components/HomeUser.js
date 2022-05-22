import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import UserRouteProtection from './UserRouteProtection';
import styles from './Styles.module.css';

const HomeUser = () => {
    UserRouteProtection();
    let navigate = useNavigate();
    const [isProfileclicked, setProfileclicked] = React.useState(false);
    return (
        <div class={styles.mainbackground}>
            <div class={styles.topnav}>
            <button class={styles.btn} onClick={() => {
                    navigate("/HomeUser");
                }}>Home</button>
            <button class={styles.btn} onClick={() => {
                    navigate("/UserNews");
                }}>News</button>
            <button class={styles.btn} onClick={() => {
                    navigate("/UserSafeLocations");
                }}>Safe Locations</button>
            <button class={styles.btn}  onClick={() => {
                    navigate("/UserFundraisers");
                }}>Fundraisers</button>
            <button class={styles.btn} onClick={() => {
                    navigate("/UserAlerts");
                }}>Alerts</button>
            <button class={styles.btn} onClick={() => {
                        navigate("/UserRequestsAdd");
                    }}>Send Request</button>
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

export default HomeUser;