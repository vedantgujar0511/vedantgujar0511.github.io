import React from "react";
import { ProjectsContent } from "../../Data/ProjectsContent";
import "./projectPage.css";
import Containt from "./Containt";
import { Grid, styled } from '@mui/material';

const StyledWrapper=styled('div')(({theme})=>({
  display:'flex',
  flexDirection:'column',
  marginLeft:'100px',
  width:'670px',
  alignItems:'flex-start',
  textAlign:'left',
  [theme.breakpoints.down('md')]:{
    marginLeft:'25px',
    width: '88vw',
  },
}));
const ProjectsPage = ({ results }) => {
  return (
    <div >
      <Containt/>
      <StyledWrapper className="all-results-container" >
        <p className="result-count">
          About {ProjectsContent.length} results (0.84 seconds)
        </p>
        <Grid container className="projects-content">
          {ProjectsContent.map((item) => (
            <Grid item className="projects-card" style={{maxWidth:'88vw'}}>
              <a href={`${item.link}`} className="project-link">
                <p> {`${item.link}`} </p>
                <h3 style={{color: '#4b82d7'}}>{`${item.name}`}</h3>
              </a>
              <div className="projects-details">
                <div className="projects-img-container">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="projects-text-container" >
                  <p className="projects-excerpt">{`${item.excerpt}`}</p>
                  <p className="projects-tools">{`${item.tools}`}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </StyledWrapper>
    </div>
  );
};

export default ProjectsPage;