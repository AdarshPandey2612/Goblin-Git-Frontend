import { NavLink } from "react-router-dom";
import { APP_NAME } from "../config/appConfig";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        {APP_NAME}
      </div>

      <nav>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
          end
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/buses"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Buses
        </NavLink>

        <NavLink
          to="/admin/routes"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Routes
        </NavLink>

        <NavLink
          to="/admin/alerts"
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

export default Sidebar;