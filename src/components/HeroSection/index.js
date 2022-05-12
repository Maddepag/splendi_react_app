import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video.mp4' />
        </HeroBg>

        <HeroContent>
            <HeroH1></HeroH1>
            <HeroP>cool stuff coming soon</HeroP>
            <HeroBtnWrapper></HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;