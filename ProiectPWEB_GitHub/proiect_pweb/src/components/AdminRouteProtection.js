import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import FetchAdminCheck from "./FetchAdminCheck";

const AdminRouteProtection = () => {

const { user, isLoading, isAuthenticated } = useAuth0();

if((window.$role != "admin") && (window.$role != "user")) {
    var adminrole = FetchAdminCheck();
    if (isAuthenticated && adminrole == true && !isLoading) // Check id to see if it's in the list of admins
    window.$role = "admin";
    if (isAuthenticated && adminrole == false && !isLoading)
    window.$role = "user";
}

let navigate = useNavigate();
if (!isAuthenticated && !isLoading)
    return (
        <div>
            {navigate("/AccessDenied")}
        </div>
    )
if (isAuthenticated && window.$role == "user" && !isLoading)
    return (
        <div>
            {navigate("/AccessDenied")}
        </div>
    )

}
export default AdminRouteProtection;