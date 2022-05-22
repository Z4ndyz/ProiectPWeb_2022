import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';

const FetchAdminCheck = () => {
    const { user, isAuthenticated } = useAuth0();
    var sub = ""
    if (isAuthenticated && user.sub != null) // Get auth0 unique user id
        sub = user.sub

    const [admins, setAdmins] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
            setTimeout(() => {
                fetch('http://localhost:8000/admins')
              .then(res => {
                if (!res.ok) { // Handle server errors
                  throw Error('could not fetch the data for that resource');
                } 
                return res.json();
              })
              .then(data => {
                setIsPending(false);
                setAdmins(data);
                setError(null);
              })
              .catch(err => {
                setIsPending(false);
                setError(err.message); // Handle Fetch Errors
              })
            }, 1000);
          }, [])
    
    if(admins != null && isAuthenticated && isPending == false) {
        for(var i = 0; i < admins.length; i++)
        {
            if(admins[i].admin_id_auth0 == sub) {
              return true;
            }
        }
        return false;
    }
    if(!isAuthenticated && !isPending) {
      return false;
    }
    
}

export default FetchAdminCheck;