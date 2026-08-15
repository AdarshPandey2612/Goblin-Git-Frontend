import { Link } from "react-router-dom";
import { useState } from "react";
import { buses as initialBuses } from "../../data/buses";

function Buses() {
  const [buses, setBuses] = useState(initialBuses);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [newBus, setNewBus] = useState({
    id: "",
    driver: "",
    route: "",
    status: "Active",
    location: "",
  });

  const filteredBuses = buses.filter((bus) =>
    `${bus.id} ${bus.driver} ${bus.route} ${bus.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setNewBus({
      ...newBus,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBus = (e) => {
    e.preventDefault();

    if (
      !newBus.id ||
      !newBus.driver ||
      !newBus.route ||
      !newBus.location
    ) {
      alert("Please fill all fields.");
      return;
    }

    const alreadyExists = buses.some(
      (bus) => bus.id.toLowerCase() === newBus.id.toLowerCase()
    );

    if (alreadyExists) {
      alert("Bus number already exists.");
      return;
    }

    setBuses([...buses, newBus]);

    setNewBus({
      id: "",
      driver: "",
      route: "",
      status: "Active",
      location: "",
    });

    setShowForm(false);
  };

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Buses</h1>
          <p>Manage and monitor school buses.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(true)}
        >
          + Add Bus
        </button>
      </div>

      {showForm && (
        <div className="form-card">

          <div className="page-heading">
            <div>
              <h2>Add New Bus</h2>
              <p>Enter the details of the new school bus.</p>
            </div>
          </div>

          <form onSubmit={handleAddBus}>

            <div className="form-grid">

              <div className="form-group">
                <label>Bus Number</label>
                <input
                  type="text"
                  name="id"
                  placeholder="Example: BUS-20"
                  value={newBus.id}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Driver</label>
                <input
                  type="text"
                  name="driver"
                  placeholder="Driver name"
                  value={newBus.driver}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Route</label>
                <input
                  type="text"
                  name="route"
                  placeholder="Example: Route E"
                  value={newBus.route}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={newBus.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Stopped">Stopped</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Current location"
                  value={newBus.location}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="form-actions">

              <button
                type="button"
                className="back-button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="primary-button"
              >
                Add Bus
              </button>

            </div>

          </form>

        </div>
      )}

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