import React from 'react'
import { useNavigate } from 'react-router-dom';


const REACT_APP_CLIENT_ID = "67455"
const REACT_APP_CLIENT_SECRET = "6664ed63e6bdf33157406afc37fbecfb0739fef5"

function StravaDirect(props) {
    const navigate = useNavigate();
 
  
    return (
      <>
        <button onClick={() => navigate(-1)}>{props.history}</button>
      </>
    );
  }
// const StravaDirect = () => {
//     console.log(window.location.href)
//     let windowntest = window.location.href
//     // window.location = `http://localhost:3000/`
//     return windowntest
// }

export default StravaDirect;