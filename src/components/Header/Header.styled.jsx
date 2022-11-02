import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px 25px 15px;
`;

export const Title = styled.h1`
    font-weight: 400;
    font-size: 18px;
    width: 50%;
`;

export const Links = styled.div`

& a {
margin-right: 8px;
}

& a:last-child {
margin-right: 0;
}

`;