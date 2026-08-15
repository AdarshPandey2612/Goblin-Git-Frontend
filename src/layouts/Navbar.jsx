import LogoutButton from "../components/ui/LogoutButton";

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>School Transport Safety Console</h2>
      </div>

      <div className="user-info">
        Admin
      </div>

      <LogoutButton />
    </header>
  );
}

export default Navbar;