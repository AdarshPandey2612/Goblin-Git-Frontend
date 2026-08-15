import { useState } from "react";
import { Link } from "react-router-dom";

function DriverEmergency() {
  const [emergencyActive, setEmergencyActive] = useState(false);

  const handleEmergency = () => {
    setEmergencyActive(true);
  };

  const handleCancel = () => {
    setEmergencyActive(false);
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="page-heading">
        <div>
          <h1>Emergency</h1>
          <p>
            Report and manage emergency situations during the trip.
          </p>
        </div>

        <Link to="/driver" className="back-button">
          ← Dashboard
        </Link>
      </div>

      {/* EMERGENCY STATUS */}
      <div className="stat-card" style={{ marginBottom: "25px" }}>

        <p className="stat-title">Emergency Status</p>

        <div style={{ margin: "15px 0" }}>

          <span
            className={
              emergencyActive
                ? "status stopped"
                : "status active"
            }
          >
            {emergencyActive
              ? "EMERGENCY ACTIVE"
              : "NO ACTIVE EMERGENCY"}
          </span>

        </div>

        <span>
          {emergencyActive
            ? "Emergency response has been triggered."
            : "Your trip is currently operating normally."}
        </span>

      </div>

      {/* EMERGENCY ACTION */}
      <div
        className="bus-section"
        style={{ marginBottom: "25px" }}
      >

        <h2>Emergency Assistance</h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: "1.6",
          }}
        >
          Use the emergency button only when there is a genuine
          safety issue involving the bus, students, driver, or
          surrounding situation.
        </p>

        {!emergencyActive ? (

          <button
            onClick={handleEmergency}
            style={{
              marginTop: "20px",
              width: "100%",
              maxWidth: "400px",
              padding: "18px",
              border: "none",
              borderRadius: "10px",
              background: "#dc2626",
              color: "white",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            🚨 TRIGGER EMERGENCY
          </button>

        ) : (

          <div style={{ marginTop: "20px" }}>

            <div
              style={{
                padding: "16px",
                background: "#fee2e2",
                color: "#991b1b",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              Emergency alert has been triggered for BUS-05.
              Admin and relevant authorities can be notified
              through the backend integration.
            </div>

            <button
              onClick={handleCancel}
              className="view-button"
            >
              Cancel Emergency
            </button>

          </div>

        )}

      </div>

      {/* CURRENT TRIP INFORMATION */}
      <div className="bus-section">

        <h2>Current Trip Information</h2>

        <div className="bus-card">
          <div>
            <h3>Bus</h3>
            <p>BUS-05</p>
          </div>
        </div>

        <div className="bus-card">
          <div>
            <h3>Driver</h3>
            <p>Rajesh Kumar</p>
          </div>
        </div>

        <div className="bus-card">
          <div>
            <h3>Route</h3>
            <p>Morning School Route</p>
          </div>
        </div>

        <div className="bus-card">
          <div>
            <h3>Current Location</h3>
            <p>Sector 12</p>
          </div>
        </div>

        <div className="bus-card">
          <div>
            <h3>Students Onboard</h3>
            <p>28 Students</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default DriverEmergency;