import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrapp,
    Button,
    ImgWrap,
    Img

} from './InfoElement'
import img1 from '../../Images/img1.svg'

const InfoSection = () => {
    return (
        <InfoContainer id="about">
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Premium Games</TopLine>
                            <Heading>Create Your Own Creative Games With Your Own Design</Heading>
                            <Subtitle>Get access to our exclusive services that allows you to creates your games with your own design or prototype</Subtitle>
                            <BtnWrapp>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                
                                >Get Started</Button>
                            </BtnWrapp>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img1}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
