import AdSection from "components/AdSection";
import Newsletter from "components/Newsletter";

import { Section, TitleSection } from "helper/CommonStyledComponents";

const NotFoundPage = ({offers}) => {
    return (
        <>
            <AdSection offers={offers} />
            <Section>
            <TitleSection>404</TitleSection>
            </Section>
            <Newsletter />
            </>
    );
}

export default NotFoundPage;