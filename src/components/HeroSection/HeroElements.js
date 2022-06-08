import styled from 'styled-components';
import heroImage from '../../images/splendi_logo_convert.svg'


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        background-image: url(${heroImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        
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
            from(rgba(0, 0, 0, 0.2)),
            to(rgba(0, 0, 0, 0.2))
          ),
          -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
          ),
          linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
      }
    `;

export const HeroBg = styled.div`
    postion: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

    @media screen and (max-width: 768px) {
        display: none;
    };

    
`;

// export const PhotoBg = styled.img`
//     display: none;

//     @media screen and (max-width: 768px) {
//         width: 100%;
//         height: 100%;
//         -o-object-fit: cover;
//         object-fit: cover;
//         background: #232a34;
//     };
// `;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
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