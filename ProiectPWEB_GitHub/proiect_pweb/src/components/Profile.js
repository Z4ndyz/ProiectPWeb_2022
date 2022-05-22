import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import FetchAdminCheck from './FetchAdminCheck';
import styles from './Styles.module.css';
import LogoutButton from './LogoutButton';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    let navigate = useNavigate();
    const { user, isLoading, isAuthenticated } = useAuth0();
    if((window.$role != "admin") && (window.$role != "user")) {
        var adminrole = FetchAdminCheck();
        if (isAuthenticated && adminrole == true && !isLoading) // Check id to see if it's in the list of admins
        window.$role = "admin";
        if (isAuthenticated && adminrole == false && !isLoading)
        window.$role = "user";
    }
    
    var sub = ""
    if (isAuthenticated && user.sub != null) // Get auth0 unique user id
        sub = user.sub

    if (!isAuthenticated && !isLoading)
        return navigate('/AccessDenied');

    if (isAuthenticated && user.family_name == null && window.$role == "admin")
        return (
            isAuthenticated && <div class={styles.mainbackground}>
                
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
                <p>User Email : {user.email}</p>
                <p>User Unique Auth0 ID : {sub}</p>
                <p>User Role : {window.$role}</p>
            </div>
        )
    
        if (isAuthenticated && user.family_name == null && window.$role == "user")
        return (
            isAuthenticated && <div class={styles.mainbackground}>
                
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
                <p>User Email : {user.email}</p>
                <p>User Unique Auth0 ID : {sub}</p>
                <p>User Role : {window.$role}</p>
            </div>
        )

        if (isAuthenticated && user.family_name != null && window.$role == "admin")

    return (
        isAuthenticated && <div class={styles.mainbackground}>

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

            <p>User Email : {user.email}</p>
            <p>User Unique Auth0 ID : {sub}</p>
            <p>User Family Name : {user.family_name}</p>
            <p>User Given Name : {user.given_name}</p>
            <p>User Role : {window.$role}</p>
        </div>
    )


    if (isAuthenticated && user.family_name != null && window.$role == "user")
    return (
        isAuthenticated && <div class={styles.mainbackground}>

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

            <p>User Email : {user.email}</p>
            <p>User Unique Auth0 ID : {sub}</p>
            <p>User Family Name : {user.family_name}</p>
            <p>User Given Name : {user.given_name}</p>
            <p>User Role : {window.$role}</p>
        </div>)

}

export default Profile;