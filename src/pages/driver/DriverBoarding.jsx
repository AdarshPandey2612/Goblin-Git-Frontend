import { useState } from "react";

const initialStudents = [
  {
    id: "STU-001",
    name: "Aarav Sharma",
    className: "8-A",
    stop: "Sector 12",
    boarded: false,
  },
  {
    id: "STU-002",
    name: "Ananya Singh",
    className: "7-B",
    stop: "City Center",
    boarded: false,
  },
  {
    id: "STU-003",
    name: "Rohan Verma",
    className: "9-A",
    stop: "Main Gate",
    boarded: false,
  },
  {
    id: "STU-004",
    name: "Priya Gupta",
    className: "6-C",
    stop: "School Road",
    boarded: false,
  },
];

function DriverBoarding() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");

  const toggleBoarding = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              boarded: !student.boarded,
            }
          : student
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.id} ${student.className} ${student.stop}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const boardedCount = students.filter(
    (student) => student.boarded
  ).length;

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Student Boarding</h1>
          <p>Track students boarding today's school bus.</p>
        </div>
      </div>

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
          <p className="stat-title">Remaining</p>
          <h2>{students.length - boardedCount}</h2>
          <span>Yet to board</span>
        </div>

      </div>

      <div className="bus-toolbar">
        <input
          type="text"
          placeholder="Search student, class or stop..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Stop</th>
              <th>Status</th>
              <th>Action</th>
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
                    className={`status ${
                      student.boarded
                        ? "active"
                        : "stopped"
                    }`}
                  >
                    {student.boarded
                      ? "Boarded"
                      : "Not Boarded"}
                  </span>
                </td>

                <td>

                  <button
                    className="primary-button"
                    onClick={() =>
                      toggleBoarding(student.id)
                    }
                  >
                    {student.boarded
                      ? "Mark Absent"
                      : "Mark Boarded"}
                  </button>

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