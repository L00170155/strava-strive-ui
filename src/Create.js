import { useState } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [user, setUser] = useState("");
  const [pass, setPassword] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userID = { user };
    const password = { pass };
    const client = { clientId };
    const clientSec = { clientSecret };
    const clientToken = { token };

    axios
      .post("http://localhost:4000/api/add", {
        userName: userID,
        password: password,
        stravaClientId: client,
        stravaClientSecret: clientSec,
        stravaToken: clientToken,
      })
      .then(function (res) {
        console.log(res);
        return "good";
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/");
  };

  return (
    <div className="create">
      <h2>Add </h2>
      <form onSubmit={handleSubmit}>
        <label>User</label>
        <input
          type="text"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={pass}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Client ID</label>
        <input
          type="text"
          required
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
        />
        <label>Client Secret</label>
        <input
          type="password"
          required
          value={clientSecret}
          onChange={(e) => setClientSecret(e.target.value)}
        />
        <label>Refresh Token</label>
        <input
          type="password"
          required
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default Create;
