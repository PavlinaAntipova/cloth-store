import AdSection from "components/AdSection";
import Contact from "components/Contact";

import { Section } from "helper/CommonStyledComponents";

const ContactPage = ({offers}) => {
    return (<>
        <Section>
            <Contact />
        </Section>
        <AdSection offers={offers} />
        </>
    );
}

export default ContactPage;