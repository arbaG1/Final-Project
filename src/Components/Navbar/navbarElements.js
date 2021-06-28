import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: #001524;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 30px;
        right: 30px;
        transform: scale(1.5);
        font-size: 1,8rem;
        cursor: pointer;
        color: white;
        
    }
`;

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;


    @media screen and (max-width: 769px){
        display: none;
    }
`;

export const NavItem = styled.li `
    height: 80px;
`;   

export const NavLinks = styled(LinkScroll) `
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Red Rose', cursive;
    font-weight: medium;
    transition: all 0.6s ease-in;
    border-width: 0px;

    &:hover {
        transition: all 0.6s ease-in;
        border-bottom: 3px solid #EAF27C;
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    margin-left: 19px;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter) `
    border-radius: 10px;
    background: #EAF27C;
    white-space: nowrap;
    padding: 9px 24px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Red Rose', cursive;
    font-weight: medium;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: white;

    }
`;