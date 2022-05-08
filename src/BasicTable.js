import React from "react"
import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import axios from "axios";

// const data = [
//     { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
//     { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
// ];

const columns = [
    { title: "Name", field: "name" },
    { title: "Date", field: "date" },
    { title: "email", field: "email" },
    { title: "text", field: "text" },
    { title: "movie_id", field: "movie_id" },
    { title: "_id", field: "_id" }
];

const baseURL = "http://localhost:4000/api/getdbusers"


function BasicTable() {

    const [data, setData] = useState([]);
    console.log(data)
    useEffect(()=>{

        fetch(`${baseURL}`)
        .then(resp=>resp.json())
        .then(resp=>setData(resp))
    },[])
    

    return (
        <div className="BasicTable">
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

export default BasicTable;