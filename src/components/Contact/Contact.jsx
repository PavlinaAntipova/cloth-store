import { useState } from "react";
import { toast } from 'react-toastify';

import { FormBtn, Input, TitleSection } from "helper/CommonStyledComponents";
import { ContactForm, Text, ContactTitle } from "./Contact.styled";

import { postFeedback } from "api/feedback";

const Contact = ({ place }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    postFeedback({ name, email, subject, message }).then(response => {
      if (response.status === "success") {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      toast(`${response.data.feedback.name}, thank you for your feedback`);
      }
      
    }).catch((err) => {
      console.log(err);
      toast.error("Something went wrong :( Try again");
    })
  }

  const onInput = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
        case "email":
        setEmail(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
    
      default:
        break;
    }
  }



    return (
        <div>
            {place === "footer" ? <ContactTitle>Contact</ContactTitle> : <TitleSection>Contact</TitleSection>}
          <ContactForm onSubmit={onSubmit}>
            <Text>Questions? Go ahead.</Text>
          <Input type="text" placeholder="Name" name="name" required onChange={onInput} value={name} />
            <Input type="email" placeholder="Email" name="email" required onChange={onInput}  value={email}/>
            <Input type="text" placeholder="Subject" name="subject" required onChange={onInput}  value={subject}/>
            <Input type="text" placeholder="Message" name="message" required onChange={onInput}  value={message}/>
            <FormBtn type="submit">Send</FormBtn>
          </ContactForm>
        </div>
    );
}

export default Contact;