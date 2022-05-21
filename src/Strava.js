import React from "react";
import { useNavigate } from 'react-router-dom';

const REACT_APP_CLIENT_ID = "67455";
const redirectUrl = "http://localhost:3000"
const windowntest = ""

function StravaDirect() {
    const navigate = useNavigate();
    console.log(navigate(-1))
    return navigate(-1)
  }

const HandleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=activity:read_all`;
    console.log(window.location.href)
    windowntest = window.location.href
    console.log(windowntest)
    StravaDirect()
   
};

const Strava = () => {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={HandleLogin}>Connect with Strava Strive</button>
        </div>
    );
};

export default Strava;