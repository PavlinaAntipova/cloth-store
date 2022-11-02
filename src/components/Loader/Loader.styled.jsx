import styled from "styled-components";

export const StyledLoader = styled.div`
position: absolute;
height: 100vh;
width: 100vw;
z-index: 999999;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
`;

export const SmallLoader = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const ErrorText = styled.div`
font-weight: 700;
&:first-of-type {
    margin-bottom: 30px;
}
`