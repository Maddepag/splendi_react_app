import React from 'react';
import Video from '../../videos/splendi_vid.mp4';
import Image from '../../images/philamoca_gig.png';
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroAnnounce, HeroBtnWrapper, iframe} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg> 
            <VideoBg autoPlay loop muted src={Video} type='splendi_vid.mp4' />
        </HeroBg>

        <HeroContent>
            <HeroH1></HeroH1>

            <HeroAnnounce>
              <HeroP></HeroP>
             
            </HeroAnnounce>
            <HeroBtnWrapper></HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;