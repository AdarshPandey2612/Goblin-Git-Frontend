import { Link } from "react-router-dom";
import { useState } from "react";
import { buses } from "../../data/buses";

function Buses() {
  const [search, setSearch] = useState("");

  const filteredBuses = buses.filter((bus) =>
    `${bus.id} ${bus.driver} ${bus.route} ${bus.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Buses</h1>
          <p>Manage and monitor school buses.</p>
        </div>

        <button className="primary-button">
          + Add Bus
        </button>
      </div>

      <div className="bus-toolbar">
        <input
          type="text"
          placeholder="Search bus, driver or route..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        <table>

          <thead>
            <tr>
              <th>Bus Number</th>
              <th>Driver</th>
              <th>Route</th>
              <th>Status</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredBuses.map((bus) => (
              <tr key={bus.id}>

                <td>
                  <strong>{bus.id}</strong>
                </td>

                <td>{bus.driver}</td>

                <td>{bus.route}</td>

                <td>
                  <span
                    className={`status ${bus.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {bus.status}
                  </span>
                </td>

                <td>{bus.location}</td>

                <td>
                  <Link
                    to={`/admin/buses/${bus.id}`}
                    className="view-button"
                  >
                    View
                  </Link>
                </td>

              </tr>
            ))}

            {filteredBuses.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No buses found.
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Buses;