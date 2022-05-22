import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";

const LocationsList = ({ locations }) => {

    let navigate = useNavigate();
    return (
      <div className="locations-list">
        {locations.map(location => (
          <div className="locations-preview" key={location.id} >
            <h2>{ location.safe_spot_address }</h2>
            <p>Safe Location Recommended For : {location.recommended_for}</p>
            <p>
            <button onClick={() => {
                    fetch('http://localhost:8000/safe_locations/' + location.id, {
                      method: 'DELETE'
                    }).then(() => {
                      {navigate("/HomeAdmin")}
                    }) 
                }}>Delete Safe Location</button> {/*Delete Safe Location of this id*/}
            </p>  
          </div>
        ))}
      </div>
    );
  }

export default LocationsList;