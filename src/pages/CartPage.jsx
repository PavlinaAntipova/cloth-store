import { useState, useEffect } from "react";

import CartItem from "components/CartItem";
import AdSection from "components/AdSection";

import { Section, TitleSection } from "helper/CommonStyledComponents";
import {  List, OrderBtn, Total } from "./style/CartPage.styled";

import { formatPrice } from "helper/functions";


const CartPage = ({offers}) => {
  const [products, setProducts] = useState([]);
  const [sumPrice, setSumPrice] = useState({});

  console.log(sumPrice);

  const calculateTotalSum = () => {
    return Object.values(sumPrice).reduce((acc, number) => acc += number, 0);
  }


  useEffect(() => {
    const cartList = localStorage.getItem('cart');
    const parsedCartList = JSON.parse(cartList);
    setProducts(parsedCartList);
  }, []);


    return (<>
        <Section>
        <TitleSection>Cart</TitleSection>
        {products && <>
          {products.length !== 0 ? <>
          <List>
              {products.map(product => <CartItem key={product._id} product={product} setSumPrice={setSumPrice} setProducts={setProducts} />)}
          </List>
          <Total>Total: <span>{formatPrice(calculateTotalSum())}</span>$</Total>
            <OrderBtn to="/order">make the order</OrderBtn>
            </> : <p>Empty...</p>
          }
        </>}
      </Section>
      <AdSection offers={offers} />
      </>
    );
}

export default CartPage;