import React from 'react';
import Video from '../../videos/splendi_vid.mp4';
import Image from '../../images/splendi_logo_convert.svg';
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, PhotoBg, VideoBg, HeroContent, HeroH1, HeroP, HeroAnnounce, HeroBtnWrapper, Rotate} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer id="home"> 
        <Rotate src={Image} type='splendi_logo_convert.svg'></Rotate>

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