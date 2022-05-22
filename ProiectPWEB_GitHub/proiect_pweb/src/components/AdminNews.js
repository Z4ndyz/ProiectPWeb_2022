import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import NewsList from './NewsList';
import AdminRouteProtection from './AdminRouteProtection';
import styles from './Styles.module.css';
import LogoutButton from './LogoutButton';

const AdminNews = () => {

    AdminRouteProtection();
    let navigate = useNavigate();
    
    const [news_articles, setNewsArticles] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/news_articles')
          .then(res => {
            if (!res.ok) { // Handle server errors
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setNewsArticles(data);
            setError(null);
          })
          .catch(err => {
            setIsPending(false);
            setError(err.message); // Handle Fetch Errors
          })
        }, 1000);
      }, [])


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
                    navigate("/AdminNewsAdd");
                }}>Add News</button>
              </div>
    <div class={styles.mainpagebox}>
            {error && <div>{ error } </div>}
            {isPending && <div>Loading News...</div>}
            {news_articles && <NewsList news_articles={news_articles} />}
        </div>
        </div>
    )
}

export default AdminNews;