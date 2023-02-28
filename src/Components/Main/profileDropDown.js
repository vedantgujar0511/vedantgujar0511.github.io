import "./profileDropDown.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { PopupMenu } from "react-simple-widgets";
import styled from "@emotion/styled";
import Myimg from '../../images/myImage.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [isProfileActive, setProfileActive] = useState("false");
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

   // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  return (
    <div id="app"  >
      <div className="text-end" >
        <PopupMenu >
          <button className="btn btn-primary" style={{background:'none',border:'none'}}>
            <img
          className="profile-pic dropbtn"
          src={Myimg}
          alt="profile"
        />
          </button>
          <div style={{margin:'50px 12px 0 0' ,background:"white", width:"270px", borderRadius:"10px"}}>
         
      {/* <div className="profile-hightlight-dropdown">
        <p> Portfolio Website </p>
        <p> Enjeck Cleopatra </p>
        <p> enjeckc1e0@gmail.com </p>
      </div> */}
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img
            className=""
            src={Myimg}
            alt="profile"
          />
          <p className="detail-text"> Vedant Gujar </p>
          <p className="detail-text"> vedantgujar0511@gmail.com </p>
          {/* <a href="https://enjeck.com"> View Another Website Design </a> */}
        </div>
        <Link className="second-detail" to="/about">
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> More about me </p>
        </Link>
        <div className="third-detail">
          <a href="https://github.com/enjeck"> GitHub</a>
        </div>
        <div className="fourth-detail">
          <a href="https://github.com/PROTechThor/gfolio"> View code </a> <span> • </span>
          <Link to="/blog"> Projects </Link>
        </div>
      </div>
          </div>
        </PopupMenu>
      </div>
    </div>
  );
                }