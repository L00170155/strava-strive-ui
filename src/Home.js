import { useState } from "react";
import axios from "axios";


const baseURL = "http://localhost:4000/cat/facts"


const Home = () => {

  const [post, setPost] = useState([]);

  const stravaData = (e) => {
    axios.get(`${baseURL}`).then((response) => {
          setPost(response.data);
         });
  }

    return ( 
        <div className="home">
            <h2>Homepage</h2>    
            <p> { post } </p>
      
            <button onClick={stravaData}>StravaData</button>
        </div>

     );
}
 
export default Home;
    