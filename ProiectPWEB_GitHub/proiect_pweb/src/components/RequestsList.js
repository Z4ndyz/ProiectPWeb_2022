import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";

const RequestsList = ({ requests }) => {

    let navigate = useNavigate();
    return (
      <div className="requests-list">
        {requests.map(request => (
          <div className="request-preview" key={request.id} >
            <h2>From : { request.personal_name }</h2>
            <p>Request : {request.request}</p>
            <p>Sender Email : { request.email }</p>
            <p>Sender Unique Auth0_ID : { request.auth0_id }</p>
            <p>Sender Telephone Number optional: {request.nr_telefon}</p>
            <p>
            <button onClick={() => {
                    fetch('http://localhost:8000/requests/' + request.id, {
                      method: 'DELETE'
                    }).then(() => {
                      {navigate("/HomeAdmin")}
                    }) 
                }}>Delete Request</button> {/*Delete Fundraiser of this id*/}
            </p>  
          </div>
        ))}
      </div>
    );
  }

export default RequestsList;