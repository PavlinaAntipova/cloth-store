import { Link } from "react-router-dom";
import styled from "styled-components";

export const Info = styled.p`
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
`;

export const Text = styled.p`
    margin-bottom: 40px;
`;

export const StyledLink = styled(Link)`
    padding: 15px;
    ${props => `background-color: ${props.theme.darkColor};`};
    text-align: center;
    text-transform: uppercase;
    ${props => `color: ${props.theme.lightColor};`};
    

    &:hover, &:focus {
    ${props => `background-color: ${props.theme.middleGreyColor};`};
    ${props => `color: ${props.theme.darkColor};`};
    }
`;

