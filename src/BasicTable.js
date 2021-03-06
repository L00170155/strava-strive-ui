import React from "react";
import MaterialTable from "material-table";
import { useState, useEffect } from "react";

const columns = [
  { title: "Name", field: "userName" },
  { title: "Date", field: "date" },
  { title: "email", field: "email" },
  { title: "text", field: "text" },
  { title: "movie_id", field: "movie_id" },
  { title: "_id", field: "_id" },
];

const baseURL = "http://localhost:4000/api/getdbusers";

function BasicTable() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch(`${baseURL}`)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  return (
    <div className="BasicTable">
      <h1 align="center">React-App</h1>
      <h4 align="center">Material Table</h4>
      <MaterialTable title="Employee Data" data={data} columns={columns} />
    </div>
  );
}

export default BasicTable;
