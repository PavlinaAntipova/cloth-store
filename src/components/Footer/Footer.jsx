import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faSnapchat, faPinterestP, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Contact from "components/Contact";
import { About, AboutLinks, Copyright, FooterContent, Info, PaymentInfo, SocialList, StoreInfo, StoreInfoList, StyledFooter, Title } from "./Footer.styled";

import { genarateUrl } from '../../helper/functions';
import content from 'data/aboutContent.json';

const Footer = () => {
    const location = useLocation();

    return (
<StyledFooter>
    <FooterContent>
        {location.pathname !== "/contact" && <Contact place="footer" />}
        <About>
            <Title>About</Title>
            <AboutLinks>
            {
                content.map(content => <li key={content.id}><Link to={`about#${genarateUrl(content.title)}`}>{content.title}</Link></li>)            
            }
          </AboutLinks>     
        </About>
        <Info>
            <StoreInfo>
          <Title>Store</Title>
          <StoreInfoList>
            <li><a href="#"><FontAwesomeIcon icon={faLocationDot} /> Company Name</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faPhoneFlip} />0044123123</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /> ex@mail.com</a></li>
          </StoreInfoList>
        </StoreInfo>
        <PaymentInfo>
            <Title>We accept</Title>
            <ul>
                <li><FontAwesomeIcon icon={faCreditCard} /> Amex</li>
                <li><FontAwesomeIcon icon={faCreditCard} /> Credit Card</li>
            </ul>
        </PaymentInfo>
        <SocialList>
            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faSnapchat} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        </SocialList>   
        </Info>
    </FooterContent>
        
    <Copyright>
        <span>Copyright</span>
    </Copyright>
</StyledFooter>);
}

export default Footer;