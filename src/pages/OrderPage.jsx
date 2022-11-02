import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
  
import { Btn, Input, Section, Select, TitleSection } from "helper/CommonStyledComponents";
import { Check, Label } from "./style/OrderPage.styled";

import { postOrder } from "api/order";

const OrderPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [delivery, setDelivery] = useState('');
  const [payment, setPayment] = useState('');

  const navigate = useNavigate();


  const onSubmit = (e) => {
    e.preventDefault();
    const cartList = localStorage.getItem('cart');
    const parsedCartList = JSON.parse(cartList);
    if(name === "" || surname === "" || email === "" || phone === "" || delivery === "" || payment === "" || !parsedCartList || parsedCartList.length === 0) {
      return;
    }
    postOrder({ name, surname, email, phone, delivery, payment, cart: parsedCartList }).then(response => {
      localStorage.setItem("cart", JSON.stringify([]));
      setName("");
      setSurname("");
      setPhone("");
      setDelivery("");
      setEmail("");
      setPayment("");
      return response.data.order;
      
    }).then((order) => {
      toast(`${order.name} ${order.surname}, thank you for your order`);
      navigate("/");
    }).catch((err) => {
      console.log(err);
      toast.error("Something went wrong :( Try again");
    })
  }

  const onChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "surname":
        setSurname(e.target.value);
        break;
        case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "delivery":
        setDelivery(e.target.value);
        break;
      case "payment":
        setPayment(e.target.value);
        break;
    
      default:
        break;
    }
  }

    return (
        <Section>
          <TitleSection>Payment & Delivery</TitleSection>
        <form autoComplete="off" onSubmit={onSubmit}>
                <Input type="text" placeholder="Name" name="name" required onChange={onChange}/>
                <Input type="text" placeholder="Surname" name="surname" required onChange={onChange}/>
                <Input type="email" name="email" id="email" placeholder="Email" onChange={onChange}/>
                <Input type="phone" name="phone" placeholder="Phone" required onChange={onChange}/>

                
          <Select name="delivery" required value={delivery} onChange={onChange}>
                <option value="delivery">Delivery</option>
                  <option value="pickup">Pickup</option>
                </Select>

                <Label>
            <input className="visually-hidden" type="radio" name="payment" value="amex" required onChange={onChange}/>
                <Check></Check>
                  <span>Amex</span>
                
              </Label>
              <Label>
                <input className="visually-hidden" type="radio" name="payment" value="card" required onChange={onChange}/>
                 <Check></Check>
                  <span>Credit Card</span>
              </Label>
              <Btn type="submit">
                Order
              </Btn>
          </form>
        </Section>
    );
}

export default OrderPage;