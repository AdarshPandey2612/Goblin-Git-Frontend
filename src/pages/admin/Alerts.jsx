import { useState } from "react";
import { alerts } from "../../data/alerts";

function Alerts() {
  const [search, setSearch] = useState("");

  const filteredAlerts = alerts.filter((alert) =>
    `${alert.id} ${alert.type} ${alert.bus} ${alert.driver} ${alert.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Alerts</h1>
          <p>Monitor and manage transport safety alerts.</p>
        </div>
      </div>

      <div className="bus-toolbar">

        <input
          type="text"
          placeholder="Search alert, bus or driver..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Alert ID</th>
              <th>Alert Type</th>
              <th>Bus</th>
              <th>Driver</th>
              <th>Location</th>
              <th>Time</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredAlerts.map((alert) => (
              <tr key={alert.id}>

                <td>
                  <strong>{alert.id}</strong>
                </td>

                <td>{alert.type}</td>

                <td>{alert.bus}</td>

                <td>{alert.driver}</td>

                <td>{alert.location}</td>

                <td>{alert.time}</td>

                <td>
                  <span
                    className={`badge ${alert.severity.toLowerCase()}`}
                  >
                    {alert.severity}
                  </span>
                </td>

                <td>
                  <span
                    className={`badge ${
                      alert.status === "Active"
                        ? "active"
                        : "resolved"
                    }`}
                  >
                    {alert.status}
                  </span>
                </td>

              </tr>
            ))}

            {filteredAlerts.length === 0 && (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No alerts found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Alerts;