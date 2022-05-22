import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import LocationsListLimited from './LocationsListLimited';
import UserRouteProtection from './UserRouteProtection';
import styles from './Styles.module.css';
import LogoutButton from './LogoutButton';

const UserSafeLocations = () => {

    UserRouteProtection();
    let navigate = useNavigate();
    
    const [locations, setLocations] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/safe_locations')
          .then(res => {
            if (!res.ok) { // Handle server errors
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setLocations(data);
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
            {error && <div>{ error } </div>}
            {isPending && <div>Loading Locations...</div>}
            {locations && <LocationsListLimited locations={locations} />}
        </div>
      </div>
    )
}

export default UserSafeLocations;