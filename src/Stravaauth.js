import React from "react"
import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import axios from "axios";

// const data = [
//     { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
//     { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
// ];

const columns = [
    { title: "Name", field: "username" },
    { title: "Date", field: "date" },
    { title: "email", field: "email" },
    { title: "text", field: "text" },
    { title: "movie_id", field: "movie_id" },
    { title: "id", field: "id" }
];

const baseURL = "http://localhost:4000/cat/stravaauth"


function Stravaauth() {

  const clientID = "67455";
  const clientSecret = "6664ed63e6bdf33157406afc37fbecfb0739fef5";
  const refreshToken = "bde54941a65fbd9f42e0fef4da68bbf3736a93ba"
  const auth_link = "https://www.strava.com/oauth/token"
  const activities_link = "https://www.strava.com/api/v3/athlete/activities"
  //const activities_link ="https://www.strava.com/api/v3/athletes/4191787"

// export const BasicTable = () => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
      // axios.get(`${baseURL}`)
      // .then((response) => {

      // setData(response.data);
         
      //   });
      //   console.log('data', data)
      fetch(`${baseURL}`)
      .then(resp=>resp.json())
      .then(resp=>setData(resp))
  },[])
    

    return (
        <div className="Stravaauth">
          <h1 align="center">React-App</h1>
          <h4 align='center'>Material Table</h4>
          <MaterialTable
            title="Employee Data"
            data={data}
            columns={columns}
          />
        </div>
      );
};

export default Stravaauth;