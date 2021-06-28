import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'

export const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #020612;

`;

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;

    @media screen and (max-width: 990px){
        flex-direction: column;
        width: 100%;
    }
`;

export const AboutUsSec = styled.div`
    margin-right: 40px;
    width:40%;
    @media screen and (max-width: 990px){
        margin-right: 0;
        width: 100%;
    }
`;

export const FooterH2 = styled.h2`
    position: relative;
    color: white;
    font-weight: 500;
    margin-bottom: 20px;

    &::before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 50px;
        height: 2px;
        background: lightgreen;
    }
`;

export const FooterP = styled.p`
    color: white;

`;

export const SciUl = styled.ul`
    margin-top: 20px;
    display: flex;
`;

export const SciLi = styled.li`
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background: lightgreen;
    }
`;

export const Icon = styled.div`
    margin-top: 9px;
    color: white;
    font-size: 20px;
`;

export const QuickLinkSec = styled.div`
    position: relative;
    margin-right: 30px;
    width: 20%;
    @media screen and (max-width: 990px){
        margin-top: 50px;
        width: 100%;
    }
`;

export const ScaUl = styled.ul`
    list-style:none;
`;

export const ScaLi = styled.li`
    display: flex;
    list-style:none;
    margin-bottom: 15px;
`;

export const Link = styled(LinkScroll)`
    color: white;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;

    &:hover{
        color: limegreen;
    }

`;

export const ContactSec = styled.div`
    width: calc(35% - 70px);
    margin-right: 0 !important;

    @media screen and (max-width: 990px){
        margin-top: 50px;
        width: 100%;
    }
`;

export const Fspan = styled.span`
    margin-right: 10px;
    color: white;
`;

export const Icon2 = styled.div`
    margin-top: 2px;
`;
