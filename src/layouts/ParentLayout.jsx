import ParentSidebar from "./ParentSidebar";
import ParentNavbar from "./ParentNavbar";

function ParentLayout({ children }) {
  return (
    <div className="app-layout">

      <ParentSidebar />

      <div className="main-section">

        <ParentNavbar />

        <main className="page-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default ParentLayout;