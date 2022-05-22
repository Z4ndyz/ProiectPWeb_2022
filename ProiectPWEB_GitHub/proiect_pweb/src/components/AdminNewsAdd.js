import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import AdminRouteProtection from './AdminRouteProtection';
import styles from './Styles.module.css';
import LogoutButton from './LogoutButton';

const AdminNewsAdd = () => {
  
  AdminRouteProtection();
  let navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const news_article = { title, body, author};
    
        fetch('http://localhost:8000/news_articles', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(news_article)
        }).then(() => {
          console.log('news_article created and posted to the db');
          {navigate("/AdminNews")}
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
        <label>News Article Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p></p>
        <label>News Article Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <p></p>
        <label>News Article Author:</label>
        <textarea
          required
          value={author}
          onChange={(e) => setName(e.target.value)}
        ></textarea>
        <p></p>
        <button>Add News Article</button>
        </form>
        </div>
        </div>
    )
}

export default AdminNewsAdd;