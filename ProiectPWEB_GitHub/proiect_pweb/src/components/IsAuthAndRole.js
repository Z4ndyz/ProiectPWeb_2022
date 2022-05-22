import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import FetchAdminCheck from './FetchAdminCheck';

const IsAuthAndRole = () => {
    const { user, isLoading, isAuthenticated } = useAuth0();
    window.$role = "loading"
    var sub = ""
    if (isAuthenticated && user.sub != null) // Get auth0 unique user id
        sub = user.sub
    var adminrole = ''
    if (isAuthenticated) {
        adminrole = FetchAdminCheck();
    };
    if (isAuthenticated && adminrole == true && !isLoading) // Check id to see if it's in the list of admins
        window.$role = "admin";
    if (isAuthenticated && adminrole == false && !isLoading)
        window.$role = "user";

    if (isLoading) return <div>Loading Auth Status...</div>
    let navigate = useNavigate();

    if(!isLoading && isAuthenticated && window.$role == "admin")
        return (
            isAuthenticated && <div>
                {navigate("/HomeAdmin")};
            </div>
        )
    if(!isLoading && isAuthenticated && window.$role == "user")
        return (
            isAuthenticated && <div>
                {navigate("/HomeUser")};
            </div>
        )
}

export default IsAuthAndRole;