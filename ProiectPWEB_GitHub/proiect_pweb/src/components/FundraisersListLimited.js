import React from 'react'
import ReactDOM from 'react-dom'
const FundraisersListLimited = ({ fundraisers }) => {

    return (
      <div className="fundraisers-list">
        {fundraisers.map(fundraiser => (
          <div className="fundraiser-preview" key={fundraiser.id} >
            <h2>{ fundraiser.fundraiser_title }</h2>
            <p>About our fundraiser : {fundraiser.fundraiser_details}</p>
            <p>Fundraiser recipient : { fundraiser.fundraiser_recipient_name }</p>
            <p>Bank Account where you can send money: {fundraiser.fundraiser_bank_account}</p>
          </div>
        ))}
      </div>
    );
  }

export default FundraisersListLimited;