import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";

const FundraisersList = ({ fundraisers }) => {

    let navigate = useNavigate();
    return (
      <div className="fundraisers-list">
        {fundraisers.map(fundraiser => (
          <div className="fundraiser-preview" key={fundraiser.id} >
            <h2>{ fundraiser.fundraiser_title }</h2>
            <p>About our fundraiser : {fundraiser.fundraiser_details}</p>
            <p>Fundraiser recipient : { fundraiser.fundraiser_recipient_name }</p>
            <p>Bank Account where you can send money: {fundraiser.fundraiser_bank_account}</p>
            <p>
            <button onClick={() => {
                    fetch('http://localhost:8000/fundraisers/' + fundraiser.id, {
                      method: 'DELETE'
                    }).then(() => {
                      {navigate("/HomeAdmin")}
                    }) 
                }}>Delete Fundraiser</button> {/*Delete Fundraiser of this id*/}
            </p>  
          </div>
        ))}
      </div>
    );
  }

export default FundraisersList;