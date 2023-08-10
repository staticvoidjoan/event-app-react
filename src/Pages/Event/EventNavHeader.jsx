import React from 'react'
import { useNavigate } from 'react-router-dom';
import backico from "../../assets/back.svg";
const HandleEventBackClick = () => {
    let navigate = useNavigate();
    navigate("/");
  };
export default function EventNavHeader({title}) {
  return (
    <div className="event-title">
    <div className="back-icon-container" onClick={HandleEventBackClick}>
      <img src={backico} alt="go back" className="back-icon" />
    </div>
    <div className="top-title-container">
      <h3>{title}</h3>
    </div>
  </div>
  )
}
