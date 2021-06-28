import styled from 'styled-components'

export const TeamsContainer = styled.div`
    text-align: center;
    background: white;
`;

export const TeamsH1 = styled.h1`

`;

export const HeaderWrappper = styled.div`
    padding-top: 60px;
    color: black;
    font-size: 20px;
    margin: auto;
    line-height: 50px;
`;

export const TeamsSubContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 420px){
        padding: 5px;
        width: 100%;
    }
`;

export const TeamsWrapper = styled.div`
    margin: 10px;
    padding: 32px;
    max-width: 60%;
    cursor: pointer;
    transition: 0.4;

    @media screen and (max-width: 550px){
        padding: 5px;
        width: 100%;
    }
`;

export const TeamsImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;

export const TeamsName = styled.div`
    padding: 12px;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
`;

export const TeamsDesk = styled.div`
    font-style: italic;
    color: grey;
`;
