import styled from "styled-components";

export const Check = styled.span`
position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    ${props => `background-color: ${props.theme.lightColor};`};
    ${props => `border: 2px solid ${props.theme.darkColor};`};
    cursor: pointer;
    ${props => `transition: background-color ${props.theme.transitionDelay} ${props.theme.transitionFunction};`};

`;

export const Label = styled.label`
display: block;
    position: relative;
    padding-left: 20px;

&:first-of-type {
    margin-bottom: 10px;
}

&:last-of-type {
    margin-bottom: 30px;
}

& input:checked+${Check} {
    ${props => `background-color: ${props.theme.darkColor};`};
}
`;



