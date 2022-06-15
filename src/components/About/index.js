import React from 'react';
import {
    AboutContainer, AboutBg, AboutContent, AboutH1, AboutAnnounceBox,  AboutP
    
} from './AboutElements'



const About = () => {

    
    return (
        
            <AboutContainer id="about"> 
                <AboutBg />
        
                <AboutContent>
                    
                    <AboutAnnounceBox>
                        <AboutH1>about</AboutH1>
                        <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</AboutP>
                    </AboutAnnounceBox>
                        
                        
                    
                    
                </AboutContent>
                
            </AboutContainer>
          )
    
};

export default About;