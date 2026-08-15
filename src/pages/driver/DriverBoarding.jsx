import { useState } from "react";
import { Link } from "react-router-dom";

function DriverBoarding() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: "STU-001",
      name: "Aarav Sharma",
      className: "Class 8",
      stop: "Sector 12",
      status: "Boarded",
    },
    {
      id: "STU-002",
      name: "Ananya Singh",
      className: "Class 7",
      stop: "City Center",
      status: "Boarded",
    },
    {
      id: "STU-003",
      name: "Rohan Verma",
      className: "Class 9",
      stop: "School Road",
      status: "Pending",
    },
    {
      id: "STU-004",
      name: "Priya Gupta",
      className: "Class 6",
      stop: "Main Gate",
      status: "Boarded",
    },
    {
      id: "STU-005",
      name: "Aditya Kumar",
      className: "Class 8",
      stop: "Sector 12",
      status: "Pending",
    },
  ];

  const filteredStudents = students.filter((student) =>
    `${student.id} ${student.name} ${student.className} ${student.stop}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const boardedCount = students.filter(
    (student) => student.status === "Boarded"
  ).length;

  const pendingCount = students.filter(
    (student) => student.status === "Pending"
  ).length;

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="page-heading">
        <div>
          <h1>Student Boarding</h1>
          <p>
            Track student boarding status for today's trip.
          </p>
        </div>

        <Link to="/driver/trip" className="back-button">
          ← Today's Trip
        </Link>
      </div>

      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Total Students</p>
          <h2>{students.length}</h2>
          <span>Assigned to this trip</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Boarded</p>
          <h2>{boardedCount}</h2>
          <span>Students onboard</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Pending</p>
          <h2>{pendingCount}</h2>
          <span>Yet to board</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Bus</p>
          <h2>BUS-05</h2>
          <span>Current trip</span>
        </div>

      </div>

      {/* SEARCH */}
      <div className="bus-toolbar">

        <input
          type="text"
          placeholder="Search student, ID or stop..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* TABLE */}
      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Pickup Stop</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredStudents.map((student) => (

              <tr key={student.id}>

                <td>
                  <strong>{student.id}</strong>
                </td>

                <td>{student.name}</td>

                <td>{student.className}</td>

                <td>{student.stop}</td>

                <td>
                  <span
                    className={
                      student.status === "Boarded"
                        ? "status active"
                        : "status stopped"
                    }
                  >
                    {student.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DriverBoarding;