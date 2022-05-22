import React from 'react'
import ReactDOM from 'react-dom'
const AlertsListLimited = ({ alerts }) => {

    return (
      <div className="alerts-list">
        {alerts.map(alert => (
          <div className="alerts-preview" key={alert.id} >
            <h2>{ alert.alert_name }</h2>
            <p>Alert Details : {alert.alert_details}</p>
          </div>
        ))}
      </div>
    );
  }

export default AlertsListLimited;