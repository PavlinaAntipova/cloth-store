import { HashLink as Link } from 'react-router-hash-link';
import styled from "styled-components";

export const Ad = styled.section`
    padding: 40px 20px;
    max-width: 2000px;
    margin-left: auto;
    margin-right: auto;
    height: 600px;
     ${props => `background-color: ${props.theme.bgColor};`};
     ${props => ` background-image: url(${props.bgImg});`};
    background-position: center;
    background-repeat: no-repeat;
     ${props => `color: ${props.theme.lightColor};`};
`;

export const AdTitle = styled.h2`
 font-weight: 600;
    font-size: 52px;
    letter-spacing: 0.1em;
    margin-bottom: 25px;
`;

export const AdDescription = styled.p`
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const AdBtn = styled(Link)`
 display: block;
    padding: 15px;
    ${props => `background-color: ${props.theme.darkColor};`};
    text-align: center;
    text-transform: uppercase;
    ${props => `color: ${props.theme.lightColor};`};
    

    &:hover, &:focus {
    ${props => `background-color: ${props.theme.middleGreyColor};`};
    ${props => `color: ${props.theme.darkColor};`};
    }
width: 200px;
`;