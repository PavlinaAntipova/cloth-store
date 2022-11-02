import styled from "styled-components";

export const Section = styled.section`
 padding: 40px 10px;
`;

export const TitleSection = styled.h2`
    font-weight: 500;
    font-size: 42px;
    margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
font-weight: 400;
`;

export const Text = styled.p`
    font-size: 14px;
    ${props => `color: ${props.theme.darkGreyColor};`};
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;

 &:focus {
    ${props => `outline: 2px solid ${props.theme.darkColor};`};
 }
`;

export const Select = styled.select`
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;

 &:focus {
    ${props => `outline: 2px solid ${props.theme.darkColor};`};
 }
`;


export const Btn = styled.button`
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
`;

export const FormBtn = styled(Btn)`
    padding: 10px;
    text-transform: capitalize;
    margin-top: 10px;
`;

export const ItemMenu = styled.li`
    padding: 10px;
    ${props => `transition: color ${props.theme.transitionDelay} ${props.theme.transitionFunction};`};
    cursor: pointer;

    &:hover, &:focus {
        ${props => {
            if (props?.dropDownState === false || props?.dropDownState === undefined) {
            return `
            background-color: ${props.theme.bgColor};
            color: ${props.theme.darkColor};
            `;
            }
        }}
    }
`;

