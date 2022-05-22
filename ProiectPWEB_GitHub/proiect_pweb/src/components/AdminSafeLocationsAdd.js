import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import AdminRouteProtection from './AdminRouteProtection';
import styles from './Styles.module.css';
import LogoutButton from './LogoutButton';

const AdminSafeLocationsAdd = () => {
  
  AdminRouteProtection();
  let navigate = useNavigate();

    const [safe_spot_address, setTitle] = useState('');
    const [recommended_for, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const safe_location = { safe_spot_address, recommended_for};
    
        fetch('http://localhost:8000/safe_locations', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(safe_location)
        }).then(() => {
          console.log('safe location created and posted to the db');
          {navigate("/AdminSafeLocations")}
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
	    <div class={styles.mainpagebox}>
        <form onSubmit={handleSubmit}>
        <label>Safe Location Address:</label>
        <input 
          type="text" 
          required 
          value={safe_spot_address}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p></p>
        <label>Safe Location Purpose:</label>
        <textarea
          required
          value={recommended_for}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <p></p>
        <button>Add Safe Location</button>
        </form>
        </div>
        </div>
    )
}

export default AdminSafeLocationsAdd;