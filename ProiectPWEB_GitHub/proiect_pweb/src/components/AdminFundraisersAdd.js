import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import AdminRouteProtection from './AdminRouteProtection';
import styles from './Styles.module.css';
import LogoutButton from './LogoutButton';

const AdminFundraisersAdd = () => {
  
  AdminRouteProtection();
  let navigate = useNavigate();

    const [fundraiser_title, setTitle] = useState('');
    const [fundraiser_details, setDetails] = useState('');
    const [fundraiser_recipient_name, setName] = useState('');
    const [fundraiser_bank_account, setBank] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const fundraiser = { fundraiser_title, fundraiser_details, fundraiser_recipient_name, fundraiser_bank_account };
    
        fetch('http://localhost:8000/fundraisers', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fundraiser)
        }).then(() => {
          console.log('fundraiser created and posted to the db');
          {navigate("/AdminFundraisers")}
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
        <label>Fundraiser title:</label>
        <input 
          type="text" 
          required 
          value={fundraiser_title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p></p>
        <label>Fundraiser details:</label>
        <textarea
          required
          value={fundraiser_details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
        <p></p>
        <label>Fundraiser recipient:</label>
        <textarea
          required
          value={fundraiser_recipient_name}
          onChange={(e) => setName(e.target.value)}
        ></textarea>
        <p></p>
        <label>Fundraiser bank account:</label>
        <textarea
          required
          value={fundraiser_bank_account}
          onChange={(e) => setBank(e.target.value)}
        ></textarea>
        <p></p>
        <button>Add Fundraiser</button>
        </form>
        </div>
        </div>
    )
}

export default AdminFundraisersAdd;