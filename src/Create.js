import { useState } from "react";

const Create = () => {

  const [user, setUser] = useState('');
  const handleSubmit = (e) => {
      e.preventDefault();
      const userID = { user };
      
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
                <button>Add Blog</button>
            </form>
        </div>
    );
}


export default Create;