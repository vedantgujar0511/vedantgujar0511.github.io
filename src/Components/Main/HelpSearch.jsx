import React, { useEffect, useRef } from 'react'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import { styled, alpha } from '@mui/material/styles';
import { Divider } from '@mui/material';
import {Link} from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display:"flex",
    borderRadius:'20px',
    borderStyle: "solid",
    borderColor: "#4f5257",
    borderWidth:'1px',
    backgroundColor: "none",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    marginLeft: 0,
    width: '582.67px',
    height:'44px',
    [theme.breakpoints.down('sm')]:{
      width:"90%",
    }
  }));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const Wrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius:'20px',
    borderStyle: "solid",
    borderColor: "#4f5257",
    borderWidth:'1px',
    backgroundColor: "#303134",
    margin: 0,
    width: '582.67px',
    [theme.breakpoints.down('sm')]:{
      width:"90%",
    }
  }));
  const Wrp = styled('div')(({ theme }) => ({
    '&:hover': {
      backgroundColor: "#3c4043",
    },
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'white',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      marginLeft:'0px',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  }));

export const HelpSearch = (props) => {
    const [query, setQuery] = useState("");

    // to close search bar when clicked outsided //
    let dom=useRef();
      useEffect(()=>{
        let temphandler=(event)=>{
          if(!dom.current.contains(event.target)){
            props.setOpen(false);
          }
        };
        document.addEventListener("mousedown",temphandler);
        return ()=>{
          document.removeEventListener("mousedown",temphandler);
        };
      })
// // // // // // //

  return (
        <>
        {
          props.open?
        <Wrapper style={{margin:"15px 0px 15px 0px"}} ref={dom} >
        <div style={{display:'flex',position:'relative',height:'44px'}} >
        <SearchIconWrapper style={{position: 'absolute'}}>
            <SearchIcon style={{color:"#91979c"}}/>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder=" "
          autoFocus
          autoComplete='true'
          inputProps={{ 'aria-label': 'search' }}
        />
        </div>
        <Divider style={{background:'#4f5257'}}/>
        <p style={{fontFamily:'sans-serif',textAlign:"left",margin:'8px 0px 5px 20px',fontSize:'14px',color:'#91979c'}}>Related to recent searches</p>
          {props.options.map((option) => (
            <Link to={`/sanket`} style={{color:'white', fontFamily:'sans-serif', textDecoration:'none'}}>
                    <Wrp className="search-option" type="button" style={{display:'flex'}}>
                    <SearchIconWrapper style={{margin:'8px 0px 7px 0px'}}>
                      <SearchIcon style={{color:"#91979c",marginRight:'10px'}}/>
                      {option.name}
                    </SearchIconWrapper>
                  </Wrp>
                  </Link>
          ))}
        </Wrapper> 
          :
          <Search style={{margin:"15px 0px 15px 0px"}} onFocus={()=>props.setOpen(true)} 
          >
        <SearchIconWrapper>
            <SearchIcon style={{color:"#91979c"}}/>
        </SearchIconWrapper>
        <StyledInputBase
          
          placeholder=" "
          inputProps={{ 'aria-label': 'search' }}
        />
        </Search>
      }
        </>
  )
}

