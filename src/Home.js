import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

    const handleCreate = () => {
        navigate("/create");
    }
    
    const handleLogon = () => {
      navigate("/logon");
    }

    return (
      <div>
        <button onClick={handleCreate}>Create User</button>
        <button onClick={handleLogon}>Logon</button>
      </div>
    );
}
 
export default Home;
    