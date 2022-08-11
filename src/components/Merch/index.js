import React from 'react';
import Image from '../../images/philamoca_gig.png';
import {
    MerchContainer, MerchBg, MerchContent, MerchAnnounceBox, MerchH1, MerchP
} from './MerchElements'
import Carousel from 'better-react-carousel'

const Merch = () => {
    return (
        <>
            <MerchContainer id="merch"> 
                <MerchBg />
                <MerchContent>
                    <MerchAnnounceBox>
                        <MerchH1>merch</MerchH1>
                            <Carousel cols={3} rows={1} gap={10} loop>
                                <Carousel.Item>
                                    <a href='https://www.w3schools.com/tags/tag_img.asp' target='_blank'>
                                        <img width="100%" src={Image}/>
                                    </a>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=2" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=3" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=3" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=3" />
                                </Carousel.Item>
                                
                            </Carousel>
                                                
                    </MerchAnnounceBox>
                        
                        
                    
                    
                </MerchContent>
                
            </MerchContainer>

        </>
    );
};

export default Merch;