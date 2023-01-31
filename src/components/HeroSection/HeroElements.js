import styled, { keyframes } from 'styled-components';

import heroImage from '../../images/splendi_logo_convert.svg'


export const HeroContainer = styled.div`
    background: #D170D0;
    justify-content: center;
    height: 1000px;
    position: relative;
    z-index: 1;
    overflow-y: hidden;
    display: flex;

    

    // @media screen and (max-width: 768px) {
    //     background-image: url(${heroImage});
    //     background-repeat: no-repeat;
    //     background-size: cover;
    //     background-position: center;
        
    // };

`

// export const HeroBg = styled.div`
//     background: #D170D0;
//     postion: relative;
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     align-items: center;
//     overflow: hidden;
    
// `

// export const VideoBg = styled.video`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: #232a34;

//     @media screen and (max-width: 768px) {
//         display: none;
//     };

    
// `;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.img`
    width: 30%;
    margin: 0 auto;
    position: absolute;
    top: 20%;

    animation: ${rotate} 10s linear infinite;
   
    
    
`;

export const PhotoBg = styled.img`
        width: 30%;
        margin: 0 auto;
        position: absolute;
        top: 20%;
        
   

    @media screen and (max-width: 768px) {
        width: 35%;
        margin: 0 auto;
        position: absolute;
        
    }; 
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;


export const HeroAnnounce = styled.div`
    border-radius: 25px;
    
    
    
    
`;


export const HeroP = styled.p`
    margin: 0 auto;
    padding: 50px 0;
    color: #fff;
    font-size: 24px;
    text-align: center;
    justify-content: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;



export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;