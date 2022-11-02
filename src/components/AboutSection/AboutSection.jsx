import { Section } from "helper/CommonStyledComponents";
import { Info, StyledLink, Text } from "./AboutSection.styled";

const AboutSection = () => {
    return (
    <Section>
      <h2 className="visually-hidden">About</h2>
        <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Info>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          ducimus voluptas eaque quia blanditiis quae vitae culpa quam
          reprehenderit inventore pariatur minus voluptatem eius, fugiat,
          aspernatur provident fuga alias? Porro.
        </Text>
        <StyledLink to="/about">Read more</StyledLink>
    </Section> 
    );
}

export default AboutSection;