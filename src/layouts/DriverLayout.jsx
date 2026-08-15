import DriverSidebar from "./DriverSidebar";
import DriverNavbar from "./DriverNavbar";

function DriverLayout({ children }) {
  return (
    <div className="app-layout">
      <DriverSidebar />

      <div className="main-section">
        <DriverNavbar />

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DriverLayout;