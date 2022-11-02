import { useState } from "react";
import { toast } from 'react-toastify';

import { NewsletterBtn, NewsletterInput, NewsletterSection } from "./Newsletter.styled";
import { TitleSection } from "helper/CommonStyledComponents";

import { postEmail } from "api/newsletter";

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    postEmail({  email }).then(response => {
      if (response.status === "success") {
      setEmail("");
      toast(`thank you for your subscription`);
      }
      
    }).catch((err) => {
      console.log(err);
      if (err.response.data.data === "Not Created") {
        toast.error("You have already sent your email");
        setEmail("");
      } else {
        toast.error("Something went wrong :( Try again");
      }
    })
  }

  const onInput = (e) => {
    setEmail(e.target.value);
  }

    return (
       <NewsletterSection>
      <TitleSection>Subscribe</TitleSection>
      <form onSubmit={onSubmit}>
        <label>To get special offers and VIP treatment:
            <NewsletterInput type="email" placeholder="Enter e-mail" required onChange={onInput} value={email} />
        </label>
        <NewsletterBtn type="submit">Subscribe</NewsletterBtn>
      </form>
    </NewsletterSection>
    );
}


export default Newsletter;