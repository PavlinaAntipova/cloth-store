import styled from "styled-components";

export const Navigation = styled.nav`
    width: 200px;
    padding: 15px;
    overflow: scroll;
    ${props => `background-color: ${props.theme.lightColor};`};

    @media screen and (max-width: 1099px) {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 99999999999;
        pointer-events: none;
        opacity: 0;
        transform: translateX(-100%);
        ${props => `transition: transform ${props.theme.transitionDelay} ${props.theme.transitionFunction};`};
        box-shadow: 14px 0px 21px -6px rgba(0, 0, 0, 0.55);

         ${props => {
            if (props.isShownMenu) {
            return `
            opacity: 1;
            transform: translateX(0);
            pointer-events: all;
            `;
            }
        }}

    }
`;

export const BtnClose = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;

    & svg {
        pointer-events: none;
    }
`;

export const CategoryList = styled.ul`
    margin-bottom: 100px;
    font-weight: 700;
    font-size: 15px;
    ${props => `color: ${props.theme.darkGreyColor};`};
`;

export const CategoryName = styled.span`
display: inline-block;
margin-right: 10px;
pointer-events: none;

`;

export const InfoList = styled.ul`

 & li {
       margin-bottom: 20px; 
    }

 & li:last-child {
    margin-bottom: 0;
 }
`;

export const DropDown = styled.ul`
    padding-left: 15px;
    font-size: 12px;
    margin-top: 20px;

    & li {
        padding: 5px;
         ${props => `transition: color ${props.theme.transitionDelay} ${props.theme.transitionFunction};`};
         cursor: pointer;
         

        &:hover, &:focus {
        background-color: #F4F3F4;
         }
    }
`;


export const DropdownBtn = styled.button`
display: inline-block;
height: 100%;

& svg {
    pointer-events: none;
}
`
