/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Counter, DeleteBtn, Info, Item, Name, PriceBox, Sum } from "./CartItem.styled";

import { formatPrice } from "helper/functions";

const CartItem = ({ product, setSumPrice, setProducts }) => {
    const [counter, setCounter] = useState(product.buyQuantity);
    const [sum, setSum] = useState(product.buyQuantity * product.price);


    const onDecreaseBtn = () => {
        if (counter === 1) return;
        setCounter((prev) => prev -= 1);
    }

    const onIncreaseBtn = () => {
        if (counter > (product.quantity - 1)) return;
        setCounter((prev) => prev += 1);
    }

    const onDeleteBtn = () => {
        const cartList = localStorage.getItem('cart');
        const parsedCartList = JSON.parse(cartList);
        const filterdCartList = parsedCartList.filter(item => item._id !== product._id);
        localStorage.setItem("cart", JSON.stringify([...filterdCartList]));
        setProducts([...filterdCartList]);

    }

    const updateStorage = () => {
        const cartList = localStorage.getItem('cart');
        const parsedCartList = JSON.parse(cartList);
        const filterdCartList = parsedCartList.filter(item => item._id !== product._id);
        localStorage.setItem("cart", JSON.stringify([...filterdCartList, { ...product, buyQuantity: counter }]));
    }

    useEffect(() => {
        setSum(product.price * counter);
        setSumPrice(prev => ({ ...prev, [product._id]: product.price * counter }));
        updateStorage();
    }, [counter]);

    return <Item key={product._id}>
                <Info>
                  <Name>{product.name.toLowerCase()}</Name>
                    <span>size: {product.size}</span>
                </Info>
                <Counter>
                    <button type="button" onClick={onDecreaseBtn}><FontAwesomeIcon icon={faMinus} /></button>
                        <span>{counter}</span>
                    <button type="button" onClick={onIncreaseBtn}><FontAwesomeIcon icon={faPlus} /></button>
        </Counter>
                    <PriceBox>
                        <span>{formatPrice(product.price)}$</span>
                            <Sum>{formatPrice(sum)}$</Sum>
                    </PriceBox>
                
                <DeleteBtn type='button' onClick={onDeleteBtn}><FontAwesomeIcon icon={faXmark} /></DeleteBtn>
                  </Item>
}

export default CartItem;