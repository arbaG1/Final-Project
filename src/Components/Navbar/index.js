import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
 } from './navbarElements';
import logo from '../../Images/logo.png'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>                
                    <NavLogo to='home' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>
                        <img src={logo} alt="logo MyProtoGames" width="170"></img>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>Our Team</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign in</NavBtnLink>
                        </NavBtn>
                    </NavMenu>                  
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
