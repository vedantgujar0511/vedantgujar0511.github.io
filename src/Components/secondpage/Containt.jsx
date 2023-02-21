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
import WorkIcon from '@mui/icons-material/Work';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
  borderRadius: "40px",
  backgroundColor: '#303134',
  display:"flex",
  marginLeft: '6vh',
  width: '530px',
  [theme.breakpoints.down('sm')]: {
    // marginLeft: theme.spacing(1),
    width: '100%',
  },
}));
const StyledIcon = styled('div')(({ theme }) => ({
[theme.breakpoints.down('sm')]:{
display:"none"
}

}));
const StyledToolbar=styled(Toolbar)(({ theme }) => ({
marginTop:'15px',
height:'100%',
position:'relative',
[theme.breakpoints.down('sm')]: {
    // marginLeft: theme.spacing(1),
    marginTop:'8px',
    display:'flex', 
    width: '80%',
  },
}));
const Styledsub = styled('div')(({ theme }) => ({
    height: '100%',
    fontFamily:'sans-serif',
    fontSize:'14px',
    color:'white',
    pointerEvents: 'none',
    display: 'flex',
    margin:'20px 0 10px 100px',
    alignItems: 'center',
    justifyContent: 'left',
    [theme.breakpoints.down('sm')]:{
      justifyContent:'center',
      marginLeft:'0',
    }
  }));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1.2, 0,0,0),
  marginLeft:'auto',
  height: '100%',
//   position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const Logostyled = styled('img')(({ theme }) => ({
    marginLeft:'80px',
    height: '4vh',
    pointerEvents: 'none',
    [theme.breakpoints.down('sm')]:{
      marginLeft:'0px',
    }
  }));
const StyledLink=styled(Link)(({theme})=>({
  [theme.breakpoints.down('sm')]:{
    display:'none',
  }
}));
const StyledLinko=styled(Link)(({theme})=>({
  margin:'2vh 0px 0px 0px',
  alignContent:'center',
  alignItems:'center',
  [theme.breakpoints.up('sm')]:{
    display:'none',
  }
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
const Containt = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" color="transparent">
        <StyledLinko to={`/`}><Logostyled src={Logo} alt='Logo-img'/></StyledLinko>
        <StyledToolbar style={{display:'flex'}}>
          <StyledLink to={`/`}><Logostyled src={Logo} alt='Logo-img'/></StyledLink>
          <Search>
            <StyledInputBase
              placeholder=" "
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
                <ClearIcon sx={{ borderRight: 1 }} style={{padding:'0px 10px',color:'#93989e'}}/>
                <SearchIcon  style={{padding:'0px 10px',color:'#8ab4f8'}}/>
            </SearchIconWrapper>
          </Search>
          <StyledIcon style={{marginLeft:'auto'}}>
            <AppsIcon style={{marginLeft:'20px',color:"white"}}/>
            <PersonIcon style={{marginLeft:'20px',color:"white"}}/>
          </StyledIcon>
        </StyledToolbar>
        <Styledsub >
            <div style={{display:'flex',alignItems:'center',marginRight:'25px'}}> <SearchIcon  style={{color:'#8ab4f8',marginRight:'7px'}}/> All </div>
            <div style={{display:'flex',alignItems:'center',marginRight:'25px'}}><ImageIcon style={{color:'#787c82',marginRight:'7px'}}/> Images</div>
            <div style={{display:'flex',alignItems:'center'}}><WorkIcon style={{color:'#787c82',marginRight:'7px'}}/>Project</div>
        </Styledsub>
        <Divider style={{background:'#4f5257'}}/>
      </AppBar>
    </Box>
  )
}

export default Containt
