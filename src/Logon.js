import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Logon = () => {
  const [user, setUser] = useState("");
  const [pass, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userID = { user };
    const password = { pass };

    axios
      .get("http://localhost:4000/api/getOneUser", {
        params: {
          userName: userID,
          password: password,
        },
      })
      .then((res) => {
        const data = res.data;
        if (data.password === pass) {
          navigate("/Stravaauth", {
            state: {
              clientID: userID,
            },
          });
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="logon">
      <h2>Login </h2>
      <form onSubmit={handleSubmit}>
        <label>User</label>
        <input
          type="text"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          required
          value={pass}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default Logon;
