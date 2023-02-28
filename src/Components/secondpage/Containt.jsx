import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../images/sanket-logo.png'
import ClearIcon from '@mui/icons-material/Clear';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
import ImageIcon from '@mui/icons-material/Image';
import {   Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProfileMenuDrop from '../Main/profileDropDown';
import BoxMenuDrop from '../Main/appsDropDown';
import { Button, IconButton, Typography } from '@mui/material';


const Search = styled(Box)(({ theme }) => ({
  borderRadius: "40px",
  backgroundColor: '#303134',
  display:"flex",
  marginLeft: '6vh',
  width: '530px',
  [theme.breakpoints.down('md')]: {
    margin: 'auto',
    width: '100%',
  },
}));
const StyledIcon = styled(Box)(({ theme }) => ({
[theme.breakpoints.down('md')]:{
display:"none"
}

}));
const StyledToolbar=styled(Toolbar)(({ theme }) => ({
marginTop:'15px',
height:'100%',
position:'relative',
[theme.breakpoints.down('sm')]: {
    marginTop:'8px',
    display:'flex', 
  },
}));
const Styledsub = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    margin:'20px 0 10px 100px',

    [theme.breakpoints.down('md')]:{
      // justifyContent:'left',
      marginLeft:'23px',
      // margin:'auto',
    }
  }));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1.2, 0,0,0),
  marginLeft:'auto',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const Logostyled = styled('img')(({ theme }) => ({
    marginLeft:'80px',
    height: '4vh',
    [theme.breakpoints.down('sm')]:{
      marginLeft:'0px',
    }
  }));
const StyledLink=styled(Link)(({theme})=>({
  [theme.breakpoints.down('md')]:{
    display:'none',
  }
}));
const StyledLinko=styled(Link)(({theme})=>({
  marginTop:'2vh',
  alignContent:'center',
  alignItems:'center',
  [theme.breakpoints.up('md')]:{
    display:'none',
  },
  [theme.breakpoints.down('md')]:{
    alignContent:'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  textAlign:'left',
  alignItems:'center',
  fontFamily:'sans-serif',
  color:'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.2, 1, 1, 0),
    width: '100%',
    marginLeft:'3vh',
    
  },
}));
const StyledTags=styled(Link)(({theme})=>({
  display:'flex',
  alignItems:'center',
  textDecoration:'none',
  fontFamily:'sans-serif',
  fontSize:'14px',
  color:'white',
}));

const Containt = () => {
  const navigate = useNavigate();
  const urlPathname = window.location.pathname;
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
  let val = "";
  if (arr) {
    val = arr[0];
  }
  const [searchInput, setSearchInput] = useState(val);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" color="transparent">
        <StyledLinko to={`/`}><Logostyled src={Logo} alt='Logo-img'/></StyledLinko>
        <StyledToolbar style={{display:'flex'}}>
          <StyledLink to={`/`}><Logostyled src={Logo} alt='Logo-img'/></StyledLink>
          <Search>
            <StyledInputBase
              // placeholder=" "
              inputProps={{ 'aria-label': 'search' }}
              defaultValue={val}
              value={searchInput}
              onChange={handleChange}
              onKeyPress={(e) => {
                if(e.key==='Enter'){
                  navigate(`/${searchInput}`);
                }
              }}
            />
            <SearchIconWrapper>
                <ClearIcon onClick={()=>setSearchInput("")} sx={{ borderRight: 1 }} style={{padding:'0px 10px',color:'#93989e',cursor:'pointer'}} />
                <SearchIcon onClick={()=>navigate(`/${searchInput}`)} style={{padding:'0px 10px',color:'#8ab4f8',cursor:'pointer'}}/>
            </SearchIconWrapper>
          </Search>
          <StyledIcon style={{marginLeft:'auto'}}>
          <IconButton
            size="small"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <Typography style={{color:"white",fontFamily:'sans-serif',cursor:'pointer'}} variant="subtitle2" component="div" sx={{ flexGrow: 1 }}
            
            >
                <a href='mailto:sanketbaheti03@gmail.com' style={{textDecoration:'none', color:'inherit'}} target="_blank" rel="noopener noreferrer">Email</a>
            </Typography>
            <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:'20px', color:"white", fontFamily:'sans-serif'}}>
            <a href={Resume} download style={{textDecoration:'none', color:'inherit'}}>Resume</a>
            </Typography> */}
            <BoxMenuDrop style={{marginLeft:'20px',color:"white"}}/>
            <ProfileMenuDrop/>
          </IconButton>
         
          </StyledIcon>
        </StyledToolbar>
        <Styledsub >
            {
              val==="Images"?
              <StyledTags to={'/Sanket'} style={{marginRight:'25px'}} > <SearchIcon  style={{color:'#787c82',marginRight:'7px'}}/> All </StyledTags>:
              <StyledTags to={'/Sanket'} style={{marginRight:'25px',color:'#8ab4f8'}} > <SearchIcon  style={{color:'#8ab4f8',marginRight:'7px'}}/> All </StyledTags>
            }
            {
              val==="Images"?
              <StyledTags to={'/Images'} style={{marginRight:'25px',color:'#8ab4f8'}}><ImageIcon style={{color:'#8ab4f8',marginRight:'7px'}}/> Images</StyledTags>
              :
              <StyledTags to={'/Images'} style={{marginRight:'25px'}}><ImageIcon style={{color:'#787c82',marginRight:'7px'}}/> Images</StyledTags>
            }
        </Styledsub>
        <Divider style={{background:'#4f5257'}}/>
      </AppBar>
    </Box>
  )
}

export default Containt
