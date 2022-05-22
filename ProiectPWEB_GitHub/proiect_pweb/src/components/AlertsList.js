import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";

const AlertsList = ({ alerts }) => {

    let navigate = useNavigate();
    return (
      <div className="alerts-list">
        {alerts.map(alert => (
          <div className="alerts-preview" key={alert.id} >
            <h2>{ alert.alert_name }</h2>
            <p>Alert Details : {alert.alert_details}</p>
            <p>
            <button onClick={() => {
                    fetch('http://localhost:8000/alerts/' + alert.id, {
                      method: 'DELETE'
                    }).then(() => {
                      {navigate("/HomeAdmin")}
                    }) 
                }}>Delete Alert</button> {/*Delete Alert of this id*/}
            </p>  
          </div>
        ))}
      </div>
    );
  }

export default AlertsList;