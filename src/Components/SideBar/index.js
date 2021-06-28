import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarMenu,
    SideBtnWrap,
    SidebarWrapper,
    SidebarRoute

} from './SideBarElement'

const SideBar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to='home' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>
                       Home
                   </SidebarLink>
                   <SidebarLink to='about' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>
                       About
                   </SidebarLink>
                   <SidebarLink to='services' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>
                       Services
                   </SidebarLink>
                   <SidebarLink to='contact' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>
                       Contact
                   </SidebarLink>
                   <SidebarLink to='team' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>
                       Our Team
                   </SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to="/signin">Sign In</SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default SideBar
