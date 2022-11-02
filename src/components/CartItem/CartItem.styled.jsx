import styled from "styled-components";

export const Item = styled.li`
position: relative;
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;

    &:last-child {
        margin-bottom: 0;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;


export const Info = styled.div`
 @media screen and (min-width: 768px) {
    max-width: 120px;
}

& span {
    font-weight: 700;
}
`;

export const Name = styled.p`
font-weight: 700;
font-size: 18px;
margin-bottom: 5px;
text-transform: capitalize;

 @media screen and (max-width: 767px) {
    & + span {
        display: block;
        margin-bottom: 20px;
    }
}
`;


export const Counter = styled.div`
    border-radius: 45px;
    padding: 15px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;

    & span {
        margin: 0 10px;
    }
     @media screen and (max-width: 767px) {
        width: 120px;
        margin: 0 auto;
        margin-bottom: 30px;
     }
`;

export const PriceBox = styled.div`
display: flex;
justify-content: space-between;
`;


export const Sum = styled.span`
font-weight: 700;
 @media screen and (min-width: 768px) {
    margin-left: 30px;
 }
`;

export const DeleteBtn = styled.button`
 @media screen and (max-width: 767px) {
    position: absolute;
    top: 50%;
    right: 10px;
 }
`;