import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faXmark } from '@fortawesome/free-solid-svg-icons';

import Logo from "components/Logo";

import { CategoryList, InfoList, Navigation, DropDown, CategoryName, BtnClose, DropdownBtn } from "./Menu.styled";
import { ItemMenu } from "helper/CommonStyledComponents";
import { theme } from "helper/styled-theme";



const Menu = ({categories, isShownMenu, setIsShownMenu}) => {
  const [isShownDropDown, setIsShownDropDown] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 1099px)' });

  const onCloseMenu = (e) => {

    if (e.target.dataset.name === "closeBtn") {
      setIsShownMenu(false);
    }
    
    if (e.target !== e.currentTarget && e.target.dataset.name !== "dropdownBtn") {
      setIsShownMenu(false);
    }
  
  }

    return (
        <div>
       <Navigation isShownMenu={isShownMenu} isMobile={isMobile} onClick={onCloseMenu}>
          {isMobile && <BtnClose type="button" data-name="closeBtn"><FontAwesomeIcon icon={faXmark} /></BtnClose>}
      
      <Logo />
          <CategoryList onClick={e => {
            if (e.target.dataset.name === "dropdownBtn") {
              setIsShownDropDown(prev => !prev);
            }
          }}>
            
            {categories.map(({ _id, name, childrenCategories, parentCategory }) => {
              if (parentCategory === "root") {
                if (childrenCategories.length) {
                  return <ItemMenu key={_id} dropDownState={isShownDropDown}><NavLink to={`category/${name.toLowerCase()}`}  
                    style={({ isActive }) => ({ color: isActive ? theme.darkColor : "inherit" })} state={{ id: `${_id}` }}><CategoryName>{name}</CategoryName></NavLink>
                    <DropdownBtn type="button" data-name="dropdownBtn">
                      <FontAwesomeIcon icon={faSortDown} />
                    </DropdownBtn>
                  {isShownDropDown && <DropDown>
                    {categories.filter(category => category.parentCategory === _id).map(subcategory => <li key={subcategory._id}><NavLink to={`category/${name.toLowerCase()}/${subcategory.name.toLowerCase()}`} state={{id:`${subcategory._id}`}}
                  style={({ isActive }) => ({color: isActive ? theme.darkColor : "inherit"})}>{subcategory.name}</NavLink></li>)}
                  </DropDown>}
                </ItemMenu>
              } else {
                  return <ItemMenu key={_id}><NavLink to={`category/${name.toLowerCase()}`} state={{id:`${_id}`}} style={({ isActive }) => ({ color: isActive ? theme.darkColor : "inherit" })}>{name}</NavLink></ItemMenu>
              }
              } 
              return null;
            })}
          </CategoryList>
          

      <InfoList>
        <li><NavLink to="contact" style={({ isActive }) => ({fontWeight: isActive ? "700" : "400"})}>Contact</NavLink></li>
        <li><NavLink to="newsletter" style={({ isActive }) => ({fontWeight: isActive ? "700" : "400"})}>Newsletter</NavLink></li>
      </InfoList>
        </Navigation>
    
    </div>
       
        
    );
}

export default Menu;

