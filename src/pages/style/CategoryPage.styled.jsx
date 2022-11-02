import { Section, Text } from "helper/CommonStyledComponents";
import styled from "styled-components";

export const CategorySection = styled(Section)`
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const Quantity = styled(Text)`
margin-bottom: 10px;
`;

export const Gallery = styled.ul`
@media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}
`;