import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bgImage from '../../images/splendi_logo_convert.svg'


export const AboutContainer = styled.div`
    background: #0c0c0c;
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 1000px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        background-image: url(${bgImage});
        
        
    };

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(rgba(0, 0, 0, 0.4)),
            to(rgba(0, 0, 0, 0.4))
          ),
          -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.4)), to(transparent));
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.8) 100%
          ),
          linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
        z-index: 2;
      }
    `;

export const AboutBg = styled.div`
    background-image: url(${bgImage});
    postion: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`
export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;



export const AboutAnnounceBox = styled.div`
    width: 800px;
    top: 50%;
    padding: 25px;
    background: transparent;
    background-color: rgba(0, 3, 28, 0.7);
    border-radius: 25px;
    
`;


export const AboutH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const AboutP = styled.p`
    margin: 0 auto;
    padding: 50px 0;
    color: #fff;
    font-size: 24px;
    text-align: left;
    justify-content: center;
    max-width: 100%;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;