import styled from "styled-components";

export const List = styled.ul`
@media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
`;

export const Item = styled.li`
max-height: 300px;

@media screen and (max-width: 767px) {
    margin-bottom: 30px;
}
`;


export const ImgBox = styled.div`
    position: relative;
    height: 70%;

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
`;

export const TextBox = styled.div`
padding: 10px;
 height: 30%;
`;