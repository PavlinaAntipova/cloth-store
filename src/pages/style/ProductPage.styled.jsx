import { Text } from "helper/CommonStyledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components"

export const ProductBox = styled.div`
@media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 30px;
    }
`;

export const ImgBox = styled.div`
height: 400px;
@media screen and (max-width: 1099px) {
    margin-bottom: 30px;
}

& img {
height: 100%;
width: 100%;
object-fit: contain;

}
`;


export const Content = styled.div`
padding: 0 25px;

& div {
display: flex;
justify-content: center;
margin-bottom: 60px;
}
`;

export const TagBtn = styled(Link)`
    padding: 5px;
    display: inline-block;
    border: 1px solid gray;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    width: 150px;

    &:first-child {
    margin-right: 20px;
}

&:hover, &:focus {
    ${props => `background-color: ${props.theme.darkColor};`};
    ${props => `color: ${props.theme.lightColor};`};
}
`;

export const Price = styled.span`
display: block;
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 20px;
`;

export const Size = styled(Text)`
margin-bottom: 20px;
`;





