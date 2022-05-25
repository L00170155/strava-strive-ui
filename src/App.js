import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BasicTable from "./BasicTable";
import Stravaauth from "./Stravaauth";
import Logon from "./Logon";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/table" element={<BasicTable />} />
            <Route path="/stravaauth" element={<Stravaauth />} />
            <Route path="/logon" element={<Logon />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
