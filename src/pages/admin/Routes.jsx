import { Link } from "react-router-dom";
import { useState } from "react";
import { routes } from "../../data/routes";

function RoutesPage() {
  const [search, setSearch] = useState("");

  const filteredRoutes = routes.filter((route) =>
    `${route.id} ${route.name} ${route.bus} ${route.driver}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Routes</h1>
          <p>Manage school transport routes.</p>
        </div>

        <button className="primary-button">
          + Add Route
        </button>
      </div>

      <div className="bus-toolbar">
        <input
          type="text"
          placeholder="Search route, bus or driver..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Route ID</th>
              <th>Route Name</th>
              <th>Bus</th>
              <th>Driver</th>
              <th>Stops</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredRoutes.map((route) => (
              <tr key={route.id}>

                <td>
                  <strong>{route.id}</strong>
                </td>

                <td>{route.name}</td>

                <td>{route.bus}</td>

                <td>{route.driver}</td>

                <td>{route.stops}</td>

                <td>
                  <span
                    className={`status ${route.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {route.status}
                  </span>
                </td>

                <td>
                  <Link
                    to={`/admin/routes/${route.id}`}
                    className="view-button"
                  >
                    View
                  </Link>
                </td>

              </tr>
            ))}

            {filteredRoutes.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No routes found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RoutesPage;