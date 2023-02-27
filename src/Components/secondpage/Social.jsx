import React from 'react'
import {Content} from '../../Data/Contents';
import Containt from './Containt';
import AllResultsCard from "../Secondary/Results";
import { styled } from '@mui/material';

const StyledWrapper=styled('div')(({theme})=>({
  display:'flex',
  flexDirection:'column',
  marginLeft:'100px',
  width:'670px',
  alignItems:'flex-start',
  [theme.breakpoints.down('md')]:{
    marginLeft:'25px',
    width: '88vw',
  },
}));
const StyledP=styled('p')(({theme})=>({
  [theme.breakpoints.down('sm')]:{
    display:'none'
  }
}))


const Social = () => {
  const contact = Content.filter((item) => item.category === "social");
  return (
    <div>
      <Containt/>
      <StyledWrapper>
        <StyledP style={{color:'#bbbcb6'}}>
          About {contact.length} results (0.43 seconds)
        </StyledP>
        <AllResultsCard results={contact} />
      </StyledWrapper>
    </div>
  )
}

export default Social
