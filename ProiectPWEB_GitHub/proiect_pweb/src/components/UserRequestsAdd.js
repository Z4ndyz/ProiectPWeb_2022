import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import UserRouteProtection from './UserRouteProtection';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Styles.module.css';
import LogoutButton from './LogoutButton';

const UserRequestsAdd = () => {
  
  UserRouteProtection();
  let navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  var personal_name = ''
  var email = ''
  var auth0_id = ''
  if(isAuthenticated) {
    personal_name = user.name;
    email = user.email;
    auth0_id = user.sub;
  }

    const [request, setRequest] = useState('');
    const [nr_telefon, setTelefon] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestform = { personal_name, request, email, auth0_id, nr_telefon };
    
        fetch('http://localhost:8000/requests', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestform)
        }).then(() => {
          console.log('request created and posted to the db');
          {navigate("/HomeUser")}
        })
      }
    
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
        <div class={styles.mainpagebox}>

        <form onSubmit={handleSubmit}>
        <label>Request :</label>
        <textarea
          required
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        ></textarea>
        <p></p>
        <label>Telephone Number - optional:</label>
        <textarea
          required
          value={nr_telefon}
          onChange={(e) => setTelefon(e.target.value)}
        ></textarea>
        <p></p>
        <button>Send Request</button>
        </form>
        </div>
      </div>
    )
}

export default UserRequestsAdd;