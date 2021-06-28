import React from 'react'
import {FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarker} from 'react-icons/fa'
import {
    FooterContainer, FooterWrapper,
    AboutUsSec, FooterH2, FooterP,
    SciUl, SciLi, Icon, ScaUl, ScaLi,
    QuickLinkSec, Link, Fspan, Icon2, ContactSec
} from './FooterElement'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <AboutUsSec>
                    <FooterH2>About Us</FooterH2>
                    <FooterP>My ProtoGames is an online platform that accommodates the creativity of game developers or designers in developing game prototypes. So that each other can perfect their creative ideas to be more perfect, then commercialized and mutually beneficial (between the seller and the buyer) on behalf of the license of the project he made.
                    </FooterP>
                    <SciUl>
                        <SciLi><Icon><FaFacebookF /></Icon></SciLi>
                        <SciLi><Icon><FaTwitter /></Icon></SciLi>
                        <SciLi><Icon><FaInstagram /></Icon></SciLi>
                        <SciLi><Icon><FaYoutube /></Icon></SciLi>
                    </SciUl>
                </AboutUsSec>
                <QuickLinkSec>
                    <FooterH2>Quick Links</FooterH2>
                    <ScaUl>
                        <ScaLi><Link to='about' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>About</Link>
                        </ScaLi>
                        <ScaLi><Link to='services' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>Services</Link>
                        </ScaLi>
                        <ScaLi><Link to='contact' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>Contact</Link>
                        </ScaLi>
                        <ScaLi><Link to='team' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>Teams</Link>
                        </ScaLi>
                    </ScaUl>
                </QuickLinkSec>
                <ContactSec>
                    <FooterH2>Contact Info</FooterH2>
                    <ScaUl>
                        <ScaLi>
                            <Fspan><Icon2><FaMapMarker /></Icon2></Fspan>
                            <Fspan>647 Linda Streen <br/>
                            Phoenixville, Pa 19560, <bt/>USA</Fspan>
                        </ScaLi>
                        <ScaLi>
                            <Fspan><Icon2><FaPhone /></Icon2></Fspan>
                            <FooterP>+1 234 523 12324 <br/> 
                            +2 934 213 885324</FooterP>
                        </ScaLi>
                        <ScaLi>
                            <Fspan><Icon2><FaEnvelope /></Icon2></Fspan>
                            <FooterP>Myprotogames@gmail.com</FooterP>
                        </ScaLi>
                        
                    </ScaUl>
                </ContactSec>
                
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
