import React from "react"
import MaterialTable from "material-table";
import { useState, useEffect } from "react";

const columns = [
    { title: "Name", field: "location_country" },
    { title: "Avg Heartrate", field: "average_heartrate" },
    { title: "Avt speed", field: "average_speed" },
    { title: "Distance", field: "distance" },
    { title: "Name", field: "name" },
    { title: "id", field: "id" }
];

const baseURL = "http://localhost:4000/api/stravaauth"


function Stravaauth() {

    const [data, setData] = useState([]);
    console.log(data)
    useEffect(()=>{
      fetch(`${baseURL}`)
      .then(resp=>resp.json())
      .then(resp=>setData(resp))
  },[])
    

    return (
        <div className="Stravaauth">
          <h1 align="center">React-App</h1>
          
          <MaterialTable
            title="Employee Data"
            data={data}
            columns={columns}
          />
        </div>
      );
};

export default Stravaauth;