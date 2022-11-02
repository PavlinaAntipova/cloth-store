import { Link, useLocation, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

import { Links, StyledHeader, Title } from './Header.styled';


const Header = ({setIsShownMenu}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1099px)' });
  const location = useLocation();
  const params = useParams();

  const toCapitalize = text => {
    return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
  }
  
  const formatingTitle = (text, type) => {
    if (type) {
      const normalizeText = text.split("-").join(" ").slice(1);
      return toCapitalize(normalizeText);
    }
    const normalizeText = text.split("-").join(" ");
    return toCapitalize(normalizeText);
    
  }

  const getTitle = () => {
    const subId = params?.subId;
    const id = params?.id;
    const page = location.pathname;


    if (subId) {
      return formatingTitle(subId);
    }

    if (id && !subId) {
      return formatingTitle(id);
    }
    return formatingTitle(page, "page");
  }

  const onMobileMenu = () => {
    setIsShownMenu(true);
  }
  
    return (<StyledHeader>
      <Title>{location.pathname !== "/" ? getTitle() : "Home"}</Title>
      <Links>
        <Link to="cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
        <Link to="search"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
        {isMobile && <button onClick={onMobileMenu} type="button"><FontAwesomeIcon icon={faBars} /></button>}
      </Links>
    </StyledHeader>);
}

export default Header;