import React from 'react';
import video from '../../Video/video.mp4';
import { HeroContainer, HeroBg, VideoBg,
    HeroContent, HeroH1, HeroP, HeroBtnWrapper
} from './HeroElement'
import {Button} from './HeroElement'

const Hero = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>May The World See Your Creative Prototype</HeroH1>
                <HeroP>
                    We create games based on your design and prototype and makes it available in any device.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup">
                        Get started
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
