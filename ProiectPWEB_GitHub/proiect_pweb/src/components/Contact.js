import styles from './Styles.module.css';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import FetchAdminCheck from './FetchAdminCheck';
import LogoutButton from './LogoutButton';


const Contact = () => {

    let navigate = useNavigate();

    const { user, isLoading, isAuthenticated } = useAuth0();
    if((window.$role != "admin") && (window.$role != "user")) {
        var adminrole = FetchAdminCheck();
        if (isAuthenticated && adminrole == true && !isLoading) // Check id to see if it's in the list of admins
        window.$role = "admin";
        if (isAuthenticated && adminrole == false && !isLoading)
        window.$role = "user";
    }

    if(!isAuthenticated)
    return(
        <div class={styles.mainbackground}>
        <div class={styles.topnav}>

                <button class={styles.btn} onClick={() => {
                    navigate("/");
                }}>Home</button>
            </div>
            <div class={styles.mainpagebox}>
                <h3> Contact us at 0728268401 for admin priviliges or send us a request from your account</h3>
                    </div>
    </div>
    )
    if(isAuthenticated && window.$role == "admin") {
        return(
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
                </div>
                <div class={styles.mainpagebox}>
                    <h3> Contact us at 0728268401 for admin priviliges or send us a request from your account</h3>
                        </div>
        </div>)
    }

    if(isAuthenticated && window.$role == "user") {
        return(
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
                </div>
                <div class={styles.mainpagebox}>
                    <h3> Contact us at 0728268401 for admin priviliges or send us a request from your account</h3>
                        </div>
        </div>)
    }


}

export default Contact;