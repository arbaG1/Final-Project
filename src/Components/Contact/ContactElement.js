import styled from 'styled-components'

export const ContactContainer = styled.div`
    position: relative;
    background: #020612;
    color: white;

`;

export const ContactWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 90vh;
    padding: 50px 100px;
    @media screen and (max-width: 991px){
        padding: 50px;
    }
`;

export const Content = styled.div`
    max-width: 800px;
    text-align: center;
`;

export const ContactH1 = styled.h1`
    font-size: 36px;
    font-weight: 700;

`;

export const ContactP = styled.p`

`;

export const ContactInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    @media screen and (max-width: 991px){
        flex-direction: column;
    }
`;

export const ContactInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 991px){
        margin-bottom: 20px;
        width: 100%;
    }
`;

export const ContactBox = styled.div`
    position: relative;
    padding: 20px 0;
    display: flex;
`;

export const IconWrapper = styled.div`
     min-width: 60px;
    height: 60px;
    background: white;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    font-size: 30px;
`;

export const Icon = styled.div`
    margin-top:14px;
    height:30px;
    color: black;
`;

export const Text = styled.div`
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    justify-content: center;
    flex-direction: column;
`;

export const BoxH2 = styled.h2`
    font-size: 18px;
    color: #6BF178;
`;

export const BoxP = styled.p`

`;

export const ContactFormWrapper = styled.div`
    width: 40%;
    padding: 40px;
    background: white;

    @media screen and (max-width: 991px){
        width: 100%;
    }
`;

export const FormH2 = styled.h2`
    display:block;
    margin-bottom: 30px;
    color: black;
    font-size: 30px;
    font-weight: 500;
`;

export const ContactForm = styled.form`
    
`;

export const InputBox = styled.div`
    position: relative;
    margin-top: 12px;
`;


export const FormSpan = styled.span`
    display: block;
    color: black;
    position: absolute;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    color: #666;
    transform: translateY(-23px);

`;

export const FormInput = styled.input`
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid black;
    outline: none;

`;

export const FormTextarea = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    resize: none;
`;

export const Button = styled.button`
    background: #6BF178;
    width: 100%;
    padding: 10px 24px;
    font-family: 'Red Rose', cursive;
    font-weight: medium;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.6 ease-in-out;
    cursor: pointer;
    outline: none;
    border: none;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: white;

    }
`;