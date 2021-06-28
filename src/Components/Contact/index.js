import React from 'react'
import {
    ContactContainer,
    ContactWrapper,
    Content, ContactH1, ContactP,
    ContactFormWrapper, ContactInfo,
    ContactBox, Icon, Text,
    BoxH2, BoxP, FormInput, InputBox, FormSpan,
    FormH2,ContactInfoWrapper,ContactForm,
    FormTextarea, Button, IconWrapper

} from './ContactElement'
import {FaFacebookSquare, FaInstagramSquare, FaEnvelope} from 'react-icons/fa'

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <Content>
                    <ContactH1>Contact Us</ContactH1>
                    <ContactP>Please contact us if your need help</ContactP>
                </Content>
                <ContactInfoWrapper>
                    <ContactInfo>
                        <ContactBox>
                            <IconWrapper> <Icon> <FaFacebookSquare /> </Icon> </IconWrapper>
                            <Text>
                                <BoxH2>Facebook</BoxH2>
                                <BoxP>Myprotogames</BoxP>
                            </Text>
                        </ContactBox>
                        <ContactBox>
                        <IconWrapper> <Icon> <FaInstagramSquare /> </Icon> </IconWrapper>
                            <Text>
                                <BoxH2>Instagram</BoxH2>
                                <BoxP>@Myprotogames</BoxP>
                            </Text>
                        </ContactBox>
                        <ContactBox>
                        <IconWrapper> <Icon> <FaEnvelope /> </Icon> </IconWrapper>
                            <Text>
                                <BoxH2>Email</BoxH2>
                                <BoxP>Myprotogames@gmail.com</BoxP>
                            </Text>
                        </ContactBox>
                    </ContactInfo>
                    <ContactFormWrapper>                        
                        <ContactForm>
                            <FormH2>Send Message</FormH2>
                            <InputBox>
                                <FormSpan className="thisSpan">Full Name</FormSpan>
                                <FormInput className="thisInput" type="text" required="required"/>
                            </InputBox>
                            <InputBox>
                                <FormSpan className="thisSpan">Email</FormSpan>
                                <FormInput className="thisInput" type="text" required="required"/>
                            </InputBox>
                            <InputBox>
                                <FormSpan className="thisSpan">Type Your Message</FormSpan>
                                <FormTextarea type="text" required="required"/>
                            </InputBox>
                            <Button>Send</Button>
                        </ContactForm>
                    </ContactFormWrapper>
                </ContactInfoWrapper>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact;
