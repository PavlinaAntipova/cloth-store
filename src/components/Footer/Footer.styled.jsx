import { SubTitle } from "helper/CommonStyledComponents";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #F1F1F1;
    font-size: 14px;
`;

export const FooterContent = styled.div`
    padding: 80px 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 30px;
    }
`;

export const About = styled.div`
 text-align: center;
`;

export const AboutLinks = styled.ul`

& li {
    margin-bottom: 15px;
    text-decoration: underline;
}

& li:last-child {
    margin-bottom: 0;
}
`;

export const Info = styled.div`
@media screen and (max-width: 767px) {
text-align: center;
}
`;

export const Title = styled(SubTitle)`
margin-bottom: 20px;
`;

export const StoreInfo = styled.div`
 margin-bottom: 20px;
`;

export const StoreInfoList = styled.ul`
& li {
    margin-bottom: 15px;
    &:last-child {
         margin-bottom: 0;
    }

    & svg {
        margin-right: 10px;
    }
}
`;

export const PaymentInfo = styled.div`
margin-bottom: 30px;

& li {
    margin-bottom: 15px;
    &:last-child {
         margin-bottom: 0;
    }
    & svg {
        margin-right: 10px;
    }
}
`;

export const SocialList = styled.ul`
display: flex;
font-size: 16px;

& li {
    margin-right: 5px;
   ${props => `transition: color ${props.theme.transitionDelay} ${props.theme.transitionFunction};`};

   &:last-child {
     margin-right: 0;
   }

   &:hover, &:focus {
    ${props => `color: ${props.theme.middleGreyColor};`};
   }
}

@media screen and (max-width: 767px) {
     justify-content: center;
}
`;

export const Copyright = styled.div`
    padding: 25px 0;
    ${props => `color: ${props.theme.lightColor};`};
    ${props => `background-color: ${props.theme.darkColor};`};
    text-align: center;
`;

