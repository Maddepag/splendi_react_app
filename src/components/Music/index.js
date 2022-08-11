import React from 'react';
import {
    MusicTitle, MusicContainer, MusicBg, MusicContent, MusicH1, MusicAnnounceBox,  MusicP
} from './MusicElements'

const Music = () => {
    return (
        <>
            
            
            <MusicContainer id="music"> 
                <MusicBg />
        
                <MusicContent>
                    
                    <MusicAnnounceBox>
                        <MusicH1>music</MusicH1>
                        
                        <MusicP><iframe 
              src="https://open.spotify.com/embed/track/3XDU9wngxRWmiCbBuHviPA?utm_source=generator&theme=0" 
              width="80%" height="480" frameBorder="0" allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe> 
</MusicP>
                    </MusicAnnounceBox>
                        
                        
                    
                    
                </MusicContent>
                
            </MusicContainer>
        </>
    )
};

export default Music;