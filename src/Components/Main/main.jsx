import React from 'react'
import {useState} from "react";
import Grid from '@mui/material/Grid';
import { HelpSearch } from './HelpSearch';
import { AppBar, Button, IconButton, Toolbar, Typography, styled } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
import Name from '../../images/sanket-logo.png'
import Background from '../../images/background2.png'
import { Link, useNavigate } from 'react-router-dom';
import Resume from '../../Resume/sanket_resume.pdf'

const ButtonS=styled(Button)({
background:"#303134",
margin:"0px 10px 0px 5px",
fontFamily:'sans-serif',
textTransform: 'none',
});
const Logostyled = styled('img')(({ theme }) => ({
  height:'11vh',
  [theme.breakpoints.down('sm')]:{
    height:'7vh',
  }
}));

const Main = () => {
    const options = [
        {
          name: "Sanket",
          value: "all"
        },
        {
          name: "About",
          value: "about"
        },
        { name: "Project", value: "project" },
        { name: "Images", value: "images" },
        { name: "Social", value: "social" }
      ];
      const [open,setOpen]=useState(false);
      const [searchInput, setSearchInput] = useState("");
      const navigate = useNavigate();
      
  return (
    <Grid style={{height:"100vh", alignItems:'center', backgroundImage:`url(${Background})`,backgroundRepeat:'no-repeat',backgroundSize:'100vw 100vh'}} >
      <AppBar elevation={0} position="static" color="transparent">
        <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
          
          <IconButton
            size="small"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography style={{color:"white",fontFamily:'sans-serif',cursor:'pointer'}} variant="subtitle2" component="div" sx={{ flexGrow: 1 }}
            
            >
                <a href='mailto:sanketbaheti03@gmail.com' style={{textDecoration:'none', color:'inherit'}} target="_blank" rel="noopener noreferrer">Email</a>
            </Typography>
            <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:'20px', color:"white", fontFamily:'sans-serif'}}>
            <a href={Resume} download style={{textDecoration:'none', color:'inherit'}}>Resume</a>
            </Typography>
            <AppsIcon style={{marginLeft:'20px',color:"white"}}/>
            <PersonIcon style={{marginLeft:'20px',color:"white"}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid style={{display:'flex', flexDirection:"column", alignItems:'center',marginTop:"100px"}}>
        <Grid style={{margin:"10px 0px 10px 0px"}}>
            <Logostyled src={Name} alt="Imag" />
        </Grid >
        <HelpSearch options={options}  open={open} setOpen={setOpen} searchInput={searchInput} setSearchInput={setSearchInput}/>
        <Grid style={{margin:"10px 0px 10px 0px"}}>
          <Link to={`/${searchInput}`} style={{textDecoration:'none'}}>
        <ButtonS variant="contained" disableElevation>
            Search
        </ButtonS>
        </Link>
        <ButtonS variant="contained" disableElevation onClick={()=>navigate(`/Sanket`)}>
            I'm Feeling Lucky
        </ButtonS>
        </Grid>
      </Grid>
      {
        !open?
      <Grid>
      <Grid style={{position:'absolute',display:'flex', bottom: '0',left:'0',color:'white',padding:'10px 10px 30px 30px'}}>
        India
      </Grid>
      <Grid style={{position:'absolute',display:'flex', bottom: '0',right:'0',color:'white',padding:'10px 30px 30px 30px'}}>
      Made by Sanket & Vedant
      </Grid>
      </Grid>:
      <div></div>
      }
    </Grid>
  )
}

export default Main
