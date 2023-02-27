import React from 'react'
import Containt from './Containt'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { styled } from '@mui/material';



const StyledWrapper=styled('div')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    marginLeft:'100px',
    width:'670px',
    alignItems:'flex-start',
    textAlign:'left',
    [theme.breakpoints.down('md')]:{
      marginLeft:'25px',
      width: '88vw',
    },
  }));

const NotFound = () => {
    const urlPathname = window.location.pathname;
    var rx = /[^/](.*)/g;
    var arr = rx.exec(urlPathname);
    let val = " ";
    if (arr) {
      val = arr[0];
    }
  return (
    <div >
      <Containt/>
      <StyledWrapper style={{color:'#bbbcb6'}}>
        <div className="suggest">
          <p> Did you mean: </p>
          <div className="suggestions">
            <Link to="/All" style={{color: '#4b82d7'}}> Sanket </Link>
            <Link to="/about" style={{color: '#4b82d7'}}> About </Link>
            <Link to="/Project" style={{color: '#4b82d7'}}> Project </Link>
            <Link to="/Images" style={{color: '#4b82d7'}}> Images </Link>
            <Link to="/Social" style={{color: '#4b82d7'}}> Social </Link>
          </div>
        </div>
        <div className="notfound-details">
          <p> No results containing all your search terms were found.</p>
          <p>
            {" "}
            Your search - <b> {val} </b> - did not match any documents.
          </p>
          <p> Suggestions: </p>
          <ul>
            <li>Make sure that all words are spelled correctly.</li>
            <li>Click one of the links from the suggestions </li>
          </ul>
        </div>
      </StyledWrapper>
    </div>
  )
}

export default NotFound
