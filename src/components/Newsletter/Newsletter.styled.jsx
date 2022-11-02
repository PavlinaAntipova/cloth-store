import { FormBtn, Input, Section } from "helper/CommonStyledComponents";
import styled from "styled-components";

export const NewsletterSection = styled(Section)`
    ${props => `color: ${props.theme.lightColor};`};
    ${props => `background-color: ${props.theme.darkColor};`};
`;

export const NewsletterInput = styled(Input)`
margin: 10px 0;
`;

export const NewsletterBtn = styled(FormBtn)`
width: 100px;
background-color: #F44336;

`;