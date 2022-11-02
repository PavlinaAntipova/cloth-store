import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { CartBtn, ImgBox, Info, StyledLink, Name, Price, StyledGalleryItem, Tag } from './GalleryItem.styled';

import { addToLocalStorage, formatPrice, genarateUrl } from 'helper/functions';

import defaultImg from 'images/default.png';

const GalleryItem = ({ product }) => {
  const [imgUrl, setImgUrl] = useState(defaultImg);
  
  const getImageUrl = (url) => {
    return new Promise(function(resolve, reject){
        const img = new Image();
        img.onload = function(){
            resolve(`${product.img}`);
        };
        img.onerror = function(){
            resolve(defaultImg);
        };
        img.src = `${product.img}`;
    });
  }
  
  const getImage = (url) => {
    return <img src={url} alt={product.name} />
  }

  const onBuyBtn = () => {
    addToLocalStorage(product);
  }

  useEffect(() => {
        getImageUrl(product.img).then(setImgUrl);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [product.img]);

    return (
      <StyledGalleryItem>
       {product.tag && <Tag>{product.tag}</Tag>} 
              <ImgBox>
              {getImage(imgUrl)}
                <CartBtn onClick={onBuyBtn} type="button">buy now <FontAwesomeIcon icon={faCartShopping} /></CartBtn>
              </ImgBox>
            
            
            <Info>
              <StyledLink to={`/product/${genarateUrl(product.name)}`} state={{id: product._id}}>
            <Name>{ product.name.toLowerCase() }</Name>
                <Price>{formatPrice(product.price)}$</Price>
              </StyledLink>
            </Info>
          </StyledGalleryItem>
    );
}

export default GalleryItem;