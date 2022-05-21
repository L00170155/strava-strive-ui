import { useState } from "react";
import axios from "axios";


const Create = () => {

  const [user, setUser] = useState('');
  const [pass, setPassword] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [token, setToken] = useState('');
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const userID = { user };
      const password = { pass };
      const client = { clientId };
      const clientSec = { clientSecret };
      const clientToken = { token };

      axios.post('http://localhost:4000/api/add', { 
        userName: userID,
        password: password,
        stravaClientId: client,
        stravaClientSecret: clientSec,
        stravaToken: clientToken,
    }) 
    .then(function (res) {
        console.log(res);
        return "good"
    })
    .catch(function (error) {
        console.log(error);
    });

  }

    return (
        <div className="create">
            <h2>Add </h2>
            <form onSubmit={handleSubmit}>
                <label>User</label>
                <input 
                  type="test"
                  required
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <label>Password</label>
                <input 
                  type="test1"
                  required
                  value={pass}
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <label>Client ID</label>
                <input 
                  type="test"
                  required
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                />
                <label>Client Secret</label>
                <input 
                  type="test1"
                  required
                  value={clientSecret}
                  onChange={(e) => setClientSecret(e.target.value)} 
                />
                <label>Token</label>
                <input 
                  type="test"
                  required
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <button>Add User</button>
            </form>
        </div>
    );
}


export default Create;