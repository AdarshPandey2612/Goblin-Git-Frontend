import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("admin");

  const handleLogin = (event) => {
    event.preventDefault();

    const userData = {
      name: "Demo User",
      role: role,
    };

    login(userData);

    navigate(`/${role}`);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>RIDEGUARD 360</h1>

        <p>School Transport Safety Console</p>

        <form onSubmit={handleLogin}>

          <label htmlFor="role">
            Select Role
          </label>

          <select
            id="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="driver">Driver</option>
            <option value="parent">Parent</option>
          </select>

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;