import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Logon = () => {

  const [user, setUser] = useState('');
  const [pass, setPassword] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
      e.preventDefault();
      const userID = { user };
      const password = { pass };
      const client = { clientId };
      const clientSec = { clientSecret };
      const clientToken = { token };
      
      axios.get('http://localhost:4000/api/getOneUser', {
        params: {
          userName: userID,
          password: password
        },
      })
      .then(res => {
        const data= res.data
        console.log(data.password)
        console.log(pass)
        if (data.password == pass ) {
          navigate("/table");
        } else {
        navigate("/")
        }
    })
  .catch(err => console.log(err))

      

  }

    return (
        <div className="Logon">
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
                <button>Add User</button>
            </form>
        </div>
    );
}


export default Logon;