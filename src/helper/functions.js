export const genarateUrl = text => {
    return text.toLowerCase().split(" ").join("-");
}

export const formatPrice = price => {
    return (Math.round(price * 100) / 100).toFixed(2);
}

export const addToLocalStorage = (product) => {
    const cartList = localStorage.getItem('cart');
    const parsedCartList = JSON.parse(cartList);

    if (parsedCartList === null) {
      localStorage.setItem("cart", JSON.stringify([{ ...product, buyQuantity: 1 }]));
    } else {
      if (parsedCartList.some(item => item._id === product._id)) {
        return;
      }
      localStorage.setItem("cart", JSON.stringify([...parsedCartList, { ...product, buyQuantity: 1 }]));
    }
}