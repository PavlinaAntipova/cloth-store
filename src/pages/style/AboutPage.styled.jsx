import { Section } from "helper/CommonStyledComponents";
import styled from "styled-components";

export const AboutSection = styled(Section)`
&:nth-child(2n) {
${props => `background-color: ${props.theme.darkColor};`};
${props => `color: ${props.theme.lightColor};`};
}
`;


