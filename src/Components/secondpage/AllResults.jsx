import React from 'react'
import {Content} from '../../Data/Contents';
import Containt from './Containt';
import AllResultsCard from "../Secondary/Results";
import AccordionComponent from "../Secondary/Midline"
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

const Details = () => {
  const all = Content;
  const first = Content.slice(0, 1);
  const theRest = Content.slice(0,1);
  return (
    <div style={{alignItems:'center'}}>
      <Containt/>
      <StyledWrapper>
        <StyledP style={{color:'#bbbcb6'}}>
          About {all.length} results (0.67 seconds)
        </StyledP>
        <AllResultsCard results={first} />
        <AccordionComponent/>
        <AllResultsCard results={theRest} />
        
      </StyledWrapper>
    </div>
  )
}

export default Details
