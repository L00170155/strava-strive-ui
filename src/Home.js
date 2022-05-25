import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  align-items: center;
  display: flex;
  background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 auto;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/create");
  };

  const handleLogon = () => {
    navigate("/logon");
  };

  return (
    <div>
      <Button onClick={handleLogon}>Login</Button>
      <br />
      <br />
      <Button onClick={handleCreate}>Create User </Button>
    </div>
  );
};

export default Home;
