import { useState } from "react";
import axios from "axios";


const Create = () => {

  const [user, setUser] = useState('');
  const [pass, setPassword] = useState('');
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const userID = { user };
      const password = { pass };
      console.log(userID);
      axios.post('http://localhost:4000/api/add', { 
        userName: userID,
        password: password,
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
                <label>Passwwod</label>
                <input 
                  type="test1"
                  required
                  value={pass}
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <button>Add Blog</button>
            </form>
        </div>
    );
}


export default Create;