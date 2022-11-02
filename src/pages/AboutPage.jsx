import { TitleSection } from "helper/CommonStyledComponents";
import { AboutSection } from "./style/AboutPage.styled";

import { genarateUrl } from "helper/functions";
import content from 'data/aboutContent.json';



const AboutPage = () => {

    
    return (
        <main>
            <article>
                {content.map(section => <AboutSection key={section.id} id={genarateUrl(section.title)}>
                    <TitleSection>{section.title}</TitleSection>
                    <p>{section.text}</p>
                </AboutSection>)}
                
            </article>
        
        </main>
            
    );
}

export default AboutPage;