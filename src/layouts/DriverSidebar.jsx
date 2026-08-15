import { NavLink } from "react-router-dom";
import { APP_NAME } from "../config/appConfig";

function DriverSidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        {APP_NAME}
      </div>

      <div
        style={{
          fontSize: "13px",
          color: "#93c5fd",
          marginBottom: "20px",
          fontWeight: "600",
        }}
      >
        DRIVER CONSOLE
      </div>

      <nav>

        <NavLink
          to="/driver"
          end
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/driver/bus"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          My Bus
        </NavLink>

        <NavLink
          to="/driver/route"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          My Route
        </NavLink>

        <NavLink
          to="/driver/trip"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Today's Trip
        </NavLink>

        <NavLink
          to="/driver/boarding"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Student Boarding
        </NavLink>

        <NavLink
          to="/driver/emergency"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Emergency
        </NavLink>

      </nav>

    </aside>
  );
}

export default DriverSidebar;