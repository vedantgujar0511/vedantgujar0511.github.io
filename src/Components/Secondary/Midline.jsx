import React from "react";
import "./Midline.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from "@mui/material";


const StyledAccordion= styled(Accordion)({
    backgroundColor:'#202124',
    color:'#bbbcb6',
    fontFamily:'sans-serif',
    textAlign:'left'
})
const StyledExpand=styled(ExpandMoreIcon)({
  color:'#bbbcb6',
})


const AccordionComponent = () => {

  return (

        <div >
          <h2 style={{ fontWeight: "normal", color: "#bbbcb6" ,textAlign:'left'}}>
            People also ask
          </h2>
          <StyledAccordion>
            <AccordionSummary
              expandIcon={<StyledExpand />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography >
                What are your hobbies?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              I have a strong interest in solving data structure problems and exploring the field of web development.
              When I'm not studying or working on my projects, I like to stay active by working out or playing sports. Additionally, I'm a avid traveler, and I love spending my free time exploring new places.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion>
            <AccordionSummary
              expandIcon={<StyledExpand />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography >
                Are you open for work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes. I am always open to work on innovate projects with 
                creative projects. 
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion>
            <AccordionSummary
              expandIcon={<StyledExpand />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography >
                What's the fastest way to reach you?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               Definitely email. Contact me at vedantgujar0511@gmail.com.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion>
            <AccordionSummary
              expandIcon={<StyledExpand />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography >
                What motivates you?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Meeting deadlines, targets or goals. mentoring and coaching others, learning new things, 
              coming up with creative ideas to improve something, and making something new.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        </div>

  );
};

export default AccordionComponent;