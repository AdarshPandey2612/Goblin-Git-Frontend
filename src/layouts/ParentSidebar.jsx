import { NavLink } from "react-router-dom";
import { APP_NAME } from "../config/appConfig";

function ParentSidebar() {
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
        PARENT CONSOLE
      </div>

      <nav>

        <NavLink
          to="/parent"
          end
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/parent/child"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          My Child
        </NavLink>

        <NavLink
          to="/parent/live"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Live Bus
        </NavLink>

        <NavLink
          to="/parent/route"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          My Route
        </NavLink>

        <NavLink
          to="/parent/alerts"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Alerts
        </NavLink>

      </nav>

    </aside>
  );
}

export default ParentSidebar;