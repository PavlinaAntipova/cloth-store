import styled from "styled-components";

export const StyledLoader = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
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