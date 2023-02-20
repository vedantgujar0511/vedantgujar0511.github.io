import React from 'react'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import { styled, alpha } from '@mui/material/styles';
import { Divider, Link } from '@mui/material';

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
    position: 'absolute',
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
    backgroundColor: "none",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    margin: 0,
    width: '582.67px',
    [theme.breakpoints.down('sm')]:{
      width:"90%",
    }
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
  return (
        <>
        {
          props.open?
        <Wrapper style={{margin:"15px 0px 15px 0px"}}>
        <div style={{display:'flex',position:'relative',height:'44px'}}>
        <SearchIconWrapper>
            <SearchIcon style={{color:"#4f5257"}}/>
        </SearchIconWrapper>
        <StyledInputBase
          onFocus={()=>props.setOpen(true)}
          onBlur={()=>props.setOpen(false)}
          placeholder=" "
          inputProps={{ 'aria-label': 'search' }}
        />
        </div>
        <Divider style={{background:'#4f5257'}}/>
          {props.options.map((option) => (
                  <div className="search-option" type="button">
                    <Link to={`/`}>{option.name}</Link>
                  </div>
          ))}
        </Wrapper> 
          :
          <Search style={{margin:"15px 0px 15px 0px"}}>
        <SearchIconWrapper>
            <SearchIcon style={{color:"#4f5257"}}/>
        </SearchIconWrapper>
        <StyledInputBase
          onFocus={()=>props.setOpen(true)}
          onBlur={()=>props.setOpen(false)}
          placeholder=" "
          inputProps={{ 'aria-label': 'search' }}
        />
        </Search>
      }
        </>
  )
}

