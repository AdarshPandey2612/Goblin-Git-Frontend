import LogoutButton from "../components/ui/LogoutButton";

function ParentNavbar() {
  return (
    <header className="navbar">

      <div>
        <h2>Parent Transport Console</h2>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div className="user-info">
          Parent
        </div>

        <LogoutButton />
      </div>

    </header>
  );
}

export default ParentNavbar;