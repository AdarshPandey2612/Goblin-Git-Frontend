import { useState } from "react";

function DriverEmergency() {
  const [active, setActive] = useState(false);

  const triggerEmergency = () => {
    const confirmed = window.confirm(
      "Are you sure you want to trigger an emergency alert?"
    );

    if (confirmed) {
      setActive(true);
    }
  };

  const resolveEmergency = () => {
    setActive(false);
  };

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Emergency</h1>
          <p>Report and manage emergency situations.</p>
        </div>
      </div>

      <div className={`emergency-card ${active ? "emergency-active" : ""}`}>

        {active ? (
          <>
            <div className="emergency-icon">⚠️</div>

            <h2>Emergency Alert Active</h2>

            <p>
              The transport control team has been notified.
            </p>

            <button
              className="resolve-button"
              onClick={resolveEmergency}
            >
              Resolve Emergency
            </button>
          </>
        ) : (
          <>
            <div className="emergency-icon">🚨</div>

            <h2>Emergency Assistance</h2>

            <p>
              Press the button only during a genuine emergency.
            </p>

            <button
              className="emergency-button"
              onClick={triggerEmergency}
            >
              TRIGGER EMERGENCY
            </button>
          </>
        )}

      </div>

    </div>
  );
}

export default DriverEmergency;