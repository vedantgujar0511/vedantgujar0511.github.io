import React from 'react'
import {useState} from "react";
import Grid from '@mui/material/Grid';
import { HelpSearch } from './HelpSearch';
import { AppBar, Button, IconButton, Toolbar, Typography, styled } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
import Name from '../../images/sanket-logo.png'

const ButtonS=styled(Button)({
background:"#303134",
margin:"0px 10px 0px 5px",
fontFamily:'sans-serif',
textTransform: 'none',
});
const Logostyled = styled('img')(({ theme }) => ({
  height:'12vh',
  [theme.breakpoints.down('sm')]:{
    height:'7vh',
  }
}));

const Main = () => {
    const options = [
        {
          name: "everything about you",
          value: "all"
        },
        {
          name: "About Me",
          value: "about"
        },
        { name: "Project", value: "project" },
        { name: "Experience", value: "experience" },
        { name: "Images", value: "images" },
        { name: "Social", value: "social" }
      ];
      const [open,setOpen]=useState(false);
      
  return (
    <Grid style={{height:"100vh", alignItems:'center'}} >
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
            <Typography style={{color:"white",fontFamily:'sans-serif'}} variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                Gmail
            </Typography>
            <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:'20px', color:"white", fontFamily:'sans-serif'}}>
                Resume 
            </Typography>
            <AppsIcon style={{marginLeft:'20px',color:"white"}}/>
            <PersonIcon style={{marginLeft:'20px',color:"white"}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid style={{display:'flex', flexDirection:"column", alignItems:'center'}}>
        <Grid style={{margin:"10px 0px 10px 0px"}}>
            <Logostyled src={Name} alt="Imag" />
        </Grid >
        <HelpSearch options={options}  open={open} setOpen={setOpen}/>
        <Grid style={{margin:"10px 0px 10px 0px"}}>
        <ButtonS variant="contained" disableElevation>
            Search
        </ButtonS>
        <ButtonS variant="contained" disableElevation>
            I'm Feeling Lucky
        </ButtonS>
        </Grid>
      </Grid>
      <Grid style={{position:'absolute', bottom: '0',color:'white',padding:'10px 10px 30px 30px'}}>
        India
      </Grid>
    </Grid>
  )
}

export default Main
