import { Btn } from "helper/CommonStyledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
margin-bottom: 20px;
`;


export const Total = styled.p`
   text-align: right;
   font-size: 18px;
   font-weight: 700;
   margin-bottom: 30px;
`;

export const OrderBtn = styled(Link)`
    display: block;
    width: 100%;
    padding: 15px;
    ${props => `background-color: ${props.theme.darkColor};`};
    text-align: center;
    text-transform: uppercase;
    ${props => `color: ${props.theme.lightColor};`};
    

    &:hover, &:focus {
    ${props => `background-color: ${props.theme.middleGreyColor};`};
    ${props => `color: ${props.theme.darkColor};`};
    }
    
    @media screen and (min-width: 768px) {
    width: 40%;
    margin: 0 auto;
    }
`;


