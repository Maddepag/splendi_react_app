import React from 'react';
import Video from '../../videos/splendi_vid.mp4';
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg> 
            <VideoBg autoPlay loop muted src={Video} type='splendi_vid.mp4' />
            
        </HeroBg>

        <HeroContent>
            <HeroH1></HeroH1>
            <HeroP>under construction</HeroP>
            <HeroBtnWrapper></HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;