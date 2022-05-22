import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import AdminRouteProtection from './AdminRouteProtection';
import styles from './Styles.module.css';
import LogoutButton from './LogoutButton';


const AdminAlertsAdd = () => {
  
  AdminRouteProtection();
let navigate = useNavigate();

    const [alert_name, setName] = useState('');
    const [alert_details, setDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const alert = { alert_name, alert_details};
    
        fetch('http://localhost:8000/alerts', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(alert)
        }).then(() => {
          console.log('alert notification created and posted to the db');
          {navigate("/AdminAlerts")}
        })
      }
    
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
        <div class={styles.mainpageboxalert}>
          <form onSubmit={handleSubmit}>
          <label>Alert Name:</label>
          <input 
            type="text" 
            required 
            value={alert_name}
            onChange={(e) => setName(e.target.value)}
          />
          <p></p>
          <label>Alert Details:</label>
          <textarea
            required
            value={alert_details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
          <p></p>
          <button>Add Alert</button>
          </form>
        </div>
      </div>
    )
}

export default AdminAlertsAdd;