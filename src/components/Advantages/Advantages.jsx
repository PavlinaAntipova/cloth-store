import { Section, TitleSection } from "helper/CommonStyledComponents";
import { ImgBox, Item, List, TextBox } from "./Advantages.styled";

import AdvantageImg1 from 'images/advantage-1.jpg';
import AdvantageImg2 from 'images/advantage-2.jpg';
import AdvantageImg3 from 'images/advantage-3.jpg';

const Advantages = () => {
    return (
     <Section>
        <TitleSection>Our advantages</TitleSection>
        <List>
          <Item>
            <ImgBox>
                <img src={AdvantageImg1} alt="Advantage" />
            </ImgBox>
            
            <TextBox>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>   
            </TextBox>
          </Item>
          <Item>
            <ImgBox>
                <img src={AdvantageImg2} alt="Advantage" />
            </ImgBox>
            <TextBox>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>   
            </TextBox>
            </Item>
          <Item>
            <ImgBox>
                <img src={AdvantageImg3} alt="Advantage" />
            </ImgBox>
            
            <TextBox>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>   
                    </TextBox>
                    </Item>
        </List>
                </Section>
    );
}

export default Advantages;