import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import FetchAdminCheck from "./FetchAdminCheck";
import styles from './Styles.module.css';
import LogoutButton from './LogoutButton';

function AccessDenied() {
    const { isLoading, isAuthenticated } = useAuth0();

    
    if((window.$role != "admin") && (window.$role != "user")) {
        var adminrole = FetchAdminCheck();
        if (isAuthenticated && adminrole == true && !isLoading) // Check id to see if it's in the list of admins
        window.$role = "admin";
        if (isAuthenticated && adminrole == false && !isLoading)
        window.$role = "user";
    }

    let navigate = useNavigate();
    if (!isAuthenticated)
        return (
            <div class={styles.mainbackground}>
                <div class={styles.mainpageboxdenied}>
                <p>You need to Log In before accessing any of the pages</p>
                <p>Please return to our Main Page and Log In there</p>
                <p><button class={styles.btn} onClick={() => {
                    navigate("/");
                }}>Home</button></p>
                </div>
            </div>
        )
    if (isAuthenticated && window.$role == "user")
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
            </div>
            <div class={styles.mainpageboxdenied}>
                <p>You tried to access this page incorrectly or</p>
                <p>You tried to access pages which are not destined for your current account type</p>
                <p>Please Log In with a user account to access user pages</p>
                <p>If you got lost instead just proceed back to our MainPage</p>
            </div>
        </div>
    )
    if (isAuthenticated && window.$role == "admin")
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
                </div>
                <div class={styles.mainpageboxdenied}>
                    <p>You tried to access this page incorrectly or</p>
                    <p>You tried to access pages which are not destined for your current account type</p>
                    <p>Please Log In with a user account to access user pages</p>
                    <p>If you got lost instead just proceed back to our MainPage</p>
                </div>
            </div>
        )
    return (
        <div class={styles.mainbackground}>
            <div class={styles.mainpageboxdenied}>
                <p>Have you lost your way?</p>
                <p><button class={styles.btn} onClick={() => {
                        navigate("/");
                    }}>Home</button></p></div>

        </div>
    )
}

export default AccessDenied;