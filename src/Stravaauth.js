//import React from "react"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const userURL = "http://localhost:4000/api/stravalogin";
const statsURL = "http://localhost:4000/api/stravaauth";

function Stravaauth() {
  const state = useLocation();

  let user = JSON.stringify(state.state.clientID.user);

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`${userURL}`)
      .then((resp) => resp.json())
      .then((resp) => setUserData(resp));
  }, []);

  const [stats, setStats] = useState(null);
  useEffect(() => {
    fetch(`${statsURL}`)
      .then((resp) => resp.json())
      .then((resp) => setStats(resp));
  }, []);

  if (stats) {
    return (
      <div className="Stravaauth">
        <h1 align="center">Profile {user}</h1>
        <br />
        <img
          src={userData.profile}
          alt="user profile pic"
          className="center-image"
        ></img>
        <br />
        <h2>User Name: {userData.username}</h2>
        <h2>First Name: {userData.firstname}</h2>
        <h2>Last Name: {userData.lastname}</h2>
        <h2>City: {userData.state}</h2>
        <h2>Country: {userData.country}</h2>
        <br />
        <h1 align="center">Statistics</h1>
        <br />
        <h2>Year to date, runs: {stats.ytd_run_totals.count}</h2>
        <h2>
          Year to date, distance (in km): {stats.ytd_run_totals.distance / 1000}
        </h2>
        <h2>Total, runs: {stats.all_run_totals.count}</h2>
        <h2>Total, distance (in km): {stats.all_run_totals.distance / 1000}</h2>

        <br />
      </div>
    );
  } else {
    return <div>Loading Profie...</div>;
  }
}

export default Stravaauth;
