import { Btn } from "helper/CommonStyledComponents";
import { HashLink as Link } from 'react-router-hash-link';
import styled from "styled-components";

export const StyledGalleryItem = styled.li`
    position: relative;
    height: 350px;

`;

export const ImgBox = styled.div`
    position: relative;
    height: 80%;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(128, 128, 128, 0.545);
    }

    & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    }

    &:hover button, &:focus button {
        z-index: 2;
    }
`;

export const Tag = styled.span`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    padding: 5px 10px;
    width: 50px;
    font-size: 12px;
    background-color: #000;
    color: #fff;
    text-align: center;
    z-index: 2;
`;

export const CartBtn = styled(Btn)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    text-transform: capitalize;
    z-index: -2;
    width: 120px;
`;

export const Info = styled.div`
 padding: 10px 0;
 height: calc(100% - 80%);
`;

export const Name = styled.h3`
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 10px;
    text-transform: capitalize;
`

export const Price = styled.span`
 font-weight: 700;
`;

export const StyledLink = styled(Link)`
 font-weight: 700;
 display: block;
 height: 100%;
 width: 100%;
`;