import React from 'react';
import { FaSpotify, FaTiktok, FaInstagram, FaCoffee } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
  } from './FooterElements';
  

const Footer = () => {
  return (
    <FooterContainer> 
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle></FooterLinkTitle>
                            <i class="fa-brands fa-spotify" href="https://open.spotify.com/artist/0FRZAnnUgEu4GXtHYysFw3"></i>
                            <i class="fa-brands fa-instagram" href="https://www.instagram.com/splendiiii/?hl=en"></i>
                            <i class="fa-brands fa-tiktok" href="https://www.tiktok.com/@splendiiii?lang=en"></i>
                            <i class="fa-solid fa-cup-togo" ></i>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'></SocialLogo>
                    <WebsiteRights>Splendi LLC © 2022 all rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//open.spotify.com/artist/0FRZAnnUgEu4GXtHYysFw3" target='_blank' aria-label='spotify'> <FaSpotify/></SocialIconLink>
                        <SocialIconLink href="//www.instagram.com/splendiiii/?hl=en" target='_blank' aria-label='instagram'><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="//www.tiktok.com/@splendiiii?lang=en" target='_blank' aria-label='tiktok'><FaTiktok/></SocialIconLink>
                        <SocialIconLink href="//www.buymeacoffee.com/splendi" target='_blank' aria-label='coffee'><FaCoffee/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  );
};

export default Footer