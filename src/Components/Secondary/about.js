import React, { Fragment } from 'react'
import { greeting } from './portfolio'
import emoji from "react-easy-emoji";
import Button from '@mui/material/Button';
import "./about.css";
import Myimg from '../../images/myImage.jpeg';
import mylinkedin from '../../images/linkdin.png'
import insta from'../../images/instagram.png';
import mygithub from'../../images/github.png';
import mygmail from'../../images/gmail.png';
import myleet from'../../images/leetcode.png';
import mytweet from'../../images/twitter.png';

import {socialMediaLinks} from "./portfolio";


const AboutPage = () => {
  return (
    <Fragment className = "greet-main1" id= "greeting">
        <div className = "greeting-main1" style={{backgroundColor:'#E9E4D9'}}>
                <div className= "greeting-main-text1" style={{marginLeft:'0px',width: '60%',display:'flex',height:'100vh'}}>
                <div style={{backgroundColor:'#E9E4D9',width:'10px',marginTop:'66vh',marginLeft:'2px'}}>
                           
                                    <a
                                    href={socialMediaLinks.github}
                                    className="icon-button github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    
                                    <img alt="github" src={mygithub}/>
                                   
                                    <span></span>
                                    </a>
                                   

                           
                                    <a
                                    href={socialMediaLinks.linkedin}
                                    className="icon-button linkedin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    
                                    <img alt="linkedin" src={mylinkedin}/>
                                    
                                    <span></span>
                                    </a>
                              

                               
                                    <a
                                    href={`mailto:${socialMediaLinks.gmail}`}
                                    className="icon-button google"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    
                                    <img alt="mail" src={mygmail}/>
                                    
                                    <span></span>
                                    </a>
                               

                               
                                    <a
                                    href={socialMediaLinks.LeetCode}
                                    className="icon-button LeetCode"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    
                                    <img alt="leetcode" src={myleet}/>
                                   
                                    <span></span>
                                    </a>
                               

                               
                                    <a
                                    href={socialMediaLinks.instagram}
                                    className="icon-button instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    
                                    <img alt="instagram" src={insta}/>
                                    
                                    <span></span>
                                    </a>
                               

                               
                                    <a
                                    href={socialMediaLinks.twitter}
                                    className="icon-button twitter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    
                                    <img alt="tweet" src={mytweet}/>
                                    
                                    <span></span>
                                    </a>
                               
                </div>
                        <div style={{marginTop:'150px',width:'600px',marginLeft:'150px',border:'0.5rem solid #000',height:'450px',borderRight:'none'}}>
                            
                            <h1 className = "greeting-text1">
                                {" "}{greeting.title}{" "}
                                <span className = "wave-emoji">{emoji("👋")}</span>
                            </h1>
                            <p className = "greeting-text-subtitle1">
                                {greeting.subTitle}
                            </p>
                            {/* <SocialMedia /> */}
                            <div className = "greeting-button">
                                <Button variant="contained" href="#contained-buttons">Contact me</Button>
                                <Button variant="contained" newTab={true} href="#Resume-link" style={{marginLeft :'30px'}}> resume Link</Button>
                                
                            </div>
                        </div>
                </div>
           
                <div className = "greeting-image1" style={{backgroundColor :'#000',display:'flex'}}>
                
                    <div style={{backgroundColor:'#000',width:'60px',marginTop:'165px',marginBottom:'162px',border: '0.5rem solid #E9E4D9',borderRight:'none',borderLeft:'none'}}></div>
                    <img alt = "my-image" src ={Myimg} style={{
                        width:'60%', 
                        borderRadius: '20px', 
                        border: '0.5rem solid #E9E4D9', 
                        marginTop:'100px',
                        // marginBottom:'400px',
                        marginRight: '0px',
                        maxWidth: '400px',
                        height: '70vh',
                        boxShadow: 'rgb(192,192,192,0.6) 0 30px 30px -30px',
                        transition: 'all 0.3s ease-out'
                        }}></img>

                    <div style={{backgroundColor:'#000',width:'150px',marginTop:'165px',marginBottom:'162px',border: '0.5rem solid #E9E4D9',marginLeft:'0px',borderLeft:'none'}}></div>
                </div>
                
        </div>
    </Fragment>
  )
}

export default AboutPage