import React from 'react'
import Profile from '../../images/Profile.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const ImagesC = () => {
  return (
    <div style={{display:'flex'}}>
      <div style={{color:'white',fontFamily:'sans-serif',display:'flex',flexDirection:'column', alignItems:'left',margin:'3vh'}}>
        <img src={Profile} alt='Img' style={{height:'30vh',borderRadius:'10px'}}/>
        <div style={{fontSize:'12px', display:'flex',flexDirection:'column',margin:'0px',alignItems:'left'}}>
        <div style={{display:'flex', alignItems:'center',marginTop:'2px'}}><LinkedInIcon style={{color:'#1976d2',height:'15px'}}/><div style={{padding:0}}>LinkedIn</div></div>
        <div style={{display:'flex', alignItems:'left',marginLeft:'5px',marginTop:'2px'}}>Sanket Baheti</div>
        </div>
      </div>
    </div>
  )
}

export default ImagesC
