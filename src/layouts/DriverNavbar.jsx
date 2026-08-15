import LogoutButton from "../components/ui/LogoutButton";

function DriverNavbar() {
  return (
    <header className="navbar">

      <div>
        <h2>Driver Transport Console</h2>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div className="user-info">
          Driver
        </div>

        <LogoutButton />
      </div>

    </header>
  );
}

export default DriverNavbar;