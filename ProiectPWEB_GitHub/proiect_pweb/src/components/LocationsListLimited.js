import React from 'react'
import ReactDOM from 'react-dom'
const LocationsListLimited = ({ locations }) => {

    return (
      <div className="locations-list">
        {locations.map(location => (
          <div className="locations-preview" key={location.id} >
            <h2>{ location.safe_spot_address }</h2>
            <p>Safe Location Recommended For : {location.recommended_for}</p>
          </div>
        ))}
      </div>
    );
  }

export default LocationsListLimited;