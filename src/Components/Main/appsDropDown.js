import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppsIcon from '@mui/icons-material/Apps';
import { PopupMenu } from "react-simple-widgets";
import { faTh } from "@fortawesome/free-solid-svg-icons";
// import logo from "../images/e-logo.png"
import li from "../../images/linkdin.png"
import gh from "../../images/github.png"
// import news from "../images/newspaper.png"
import suitcase from "../../images/suitcase.png"
import email from "../../images/gmail.png"
import img from '../../images/myImage.jpeg';
import about from "../../images/info.png";
import leetcode from "../../images/leetcode.png"


const BoxMenuDrop = () => {
  const [isActive, setActive] = useState("false");

  // Toggle the dropdown
  const handleToggle = () => {
    setActive(!isActive);
  };

  // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setActive(!!isActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef);

  return (
    <div id="app"  >
      <div className="text-end" style={{ position: 'relative',
      display:' inline-block'}} >
        <PopupMenu >
          <button className="btn btn-primary" style={{background:'none',border:'none'}}>
            <AppsIcon style={{ marginLeft:'20px' ,color:'white'}}/>
          </button>

          <div style={{background:"white", width:"270px", borderRadius:"10px"}}>
          <div
              id="drop"
              className={
                isActive
                  ? "dropdown-content-cont dropdown-hide"
                  : "dropdown-content-cont dropdown-show"
              }
              style={{
                position: 'absolute',
                backgroundColor:' #ffff',
                
                width: '250px',
                height: '300px',
                boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.15)',
                border: '1px solid #eee',
                borderRadius: '10px',
                zIndex:'3',
                right: '200px',
                padding: '20px',
                top: '40px'
              }}
            >
        <div className="drop-item"
            style={{
              display: 'grid',
              justifyContent: 'space-between',
              width: '100%',
              gridTemplateColumns:' 1fr 1fr 1fr'
            }}
            >
          {/* <Link className="drop-link" to="/">
            <img
              src={logo}
              alt=""
            />
            <p> Search </p>
          </Link> */}
          <Link  className="drop-link" to="/about"
          style ={{width: '84px',
                  height: '84px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#555',
                  marginBottom: '10px'}}
          >
            <img
              src={about}
              alt=""
              style={{ width: '35px',
              margin: 'auto',
              marginTop: '10px'}}
            />
            <p> About </p>
          </Link >
          <Link  className="drop-link" to="/project"
          style ={{width: '84px',
          height: '84px',
          textAlign: 'center',
          borderRadius: '8px',
          textDecoration: 'none',
          color: '#555',
          marginBottom: '10px'}}
          >
            <img
              src={suitcase}
              alt=""
              style={{ width: '35px',
                margin: 'auto',
                marginTop: '10px'}}
            />
            <p> Project </p>
          </Link >
          <Link  className="drop-link" to="/images" style={{textDecoration:'none', color:'black'}}>
            <img
              src={img}
              alt=""
              style={{ width: '35px',
              margin: '10px auto 8px auto'}}
            />
            Images
          </Link >
          <a className="drop-link" href="mailto:vedantgujar0511@gmail.com"
          target={"_blank"}

          style ={{width: '84px',
          height: '84px',
          textAlign: 'center',
          borderRadius: '8px',
          textDecoration: 'none',
          color: '#555',
          marginBottom: '10px'}}
          >
            <img
              src={email}
              alt=""
              style={{ width: '35px',
              margin: 'auto',
              marginTop: '10px'}}
            />
            <p> Email </p>
          </a>
          <a className="drop-link" href="https://github.com/vedantgujar0511"
          style ={{width: '84px',
          height: '84px',
          textAlign: 'center',
          borderRadius: '8px',
          textDecoration: 'none',
          color: '#555',
          marginBottom: '10px'}}
          >
            <img
              src={gh}
              alt=""
              style={{ width: '35px',
              margin: 'auto',
              marginTop: '10px'}}
            />
            <p> GitHub </p>
          </a>
          <a className="drop-link" href="https://www.linkedin.com/in/vedant-gujar-177481192/"
          style ={{width: '84px',
          height: '84px',
          textAlign: 'center',
          borderRadius: '8px',
          textDecoration: 'none',
          color: '#555',
          marginBottom: '10px'}}
          >
            <img
              src={li}
              alt=""
              style={{ width: '35px',
              margin: 'auto',
              marginTop: '10px'}}
            />
            <p> LinkedIn </p>
          </a>
          <a className="drop-link" href="https://leetcode.com/vedant_mg/"
          style ={{width: '84px',
          height: '84px',
          textAlign: 'center',
          borderRadius: '8px',
          textDecoration: 'none',
          color: '#555',
          marginBottom: '10px'}}
          >
            <img
              src={leetcode}
              alt=""
              style={{ width: '35px',
              margin: 'auto',
              marginTop: '10px'}}
            />
            <p> LeetCode </p>
          </a>
          </div>
      </div>
          </div>
        </PopupMenu>
          </div>
    </div>
  );
};

export default BoxMenuDrop;