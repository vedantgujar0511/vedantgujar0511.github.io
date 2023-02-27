import React from 'react'
import Profile from '../../images/Profile.jpg';
import BPGC from '../../images/BPGC.jpg'
import BPGCM from '../../images/bpgc1.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Flipkart from '../../images/flipkart1.png';
import { Grid, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Containt from './Containt';


const StyledImg=styled('img')(({theme})=>({
  borderRadius:'10px',
  [theme.breakpoints.up('md')]:{
    height:'40vh',
  },
  [theme.breakpoints.down('sm')]:{
    maxWidth:'80vw',
  }
}));


const ImagesC = () => {
  return (
    <>
    <Containt/>
    <Grid container>
      <Grid item style={{color:'white',fontFamily:'sans-serif',display:'flex',flexDirection:'column', alignItems:'left',margin:'3vh'}}>
        <StyledImg src={Profile} alt='Img'/>
        <div style={{fontSize:'12px', display:'flex',flexDirection:'column',margin:'0px',alignItems:'left'}}>
        <div style={{display:'flex', alignItems:'center',marginTop:'2px'}}><LinkedInIcon style={{color:'#1976d2',height:'15px'}}/><div style={{padding:0}}>LinkedIn</div></div>
        <div style={{display:'flex', alignItems:'left',marginLeft:'5px',marginTop:'2px'}}>Sanket Baheti</div>
        </div>
      </Grid>
      <Grid item style={{color:'white',fontFamily:'sans-serif',display:'flex',flexDirection:'column', alignItems:'left',margin:'3vh'}}>
        <StyledImg src={BPGCM} alt='Img' />
        <div style={{fontSize:'12px', display:'flex',flexDirection:'column',margin:'0px',alignItems:'left'}}>
        <div style={{display:'flex', alignItems:'center',marginTop:'2px'}}><FacebookIcon style={{color:'#1976d2',height:'15px'}}/><div style={{padding:0}}>Facebook</div></div>
        <div style={{display:'flex', alignItems:'left',marginLeft:'5px',marginTop:'2px'}}>BITS - Pilani, K. K. Birla Goa Campus</div>
        </div>
      </Grid>
      <Grid item style={{color:'white',fontFamily:'sans-serif',display:'flex',flexDirection:'column', alignItems:'left',margin:'3vh'}}>
        <StyledImg src={BPGC} alt='Img' />
        <div style={{fontSize:'12px', display:'flex',flexDirection:'column',margin:'0px',alignItems:'left'}}>
        <div style={{display:'flex', alignItems:'center',marginTop:'2px'}}><FacebookIcon style={{color:'#1976d2',height:'15px'}}/><div style={{padding:0}}>Facebook</div></div>
        <div style={{display:'flex', alignItems:'left',marginLeft:'5px',marginTop:'2px'}}>BITS Goa</div>
        </div>
      </Grid>
      <Grid item style={{color:'white',fontFamily:'sans-serif',display:'flex',flexDirection:'column', alignItems:'left',margin:'3vh'}}>
        <StyledImg src={Flipkart} alt='Img' />
        <div style={{fontSize:'12px', display:'flex',flexDirection:'column',margin:'0px',alignItems:'left'}}>
        <div style={{display:'flex', alignItems:'center',marginTop:'2px'}}><GitHubIcon style={{color:'#1976d2',height:'15px'}}/><div style={{padding:0}}>GitHub</div></div>
        <div style={{display:'flex', alignItems:'left',marginLeft:'5px',marginTop:'2px'}}>Sanket Baheti\Flipkart</div>
        </div>
      </Grid>
    </Grid>
    </>
  )
}

export default ImagesC
