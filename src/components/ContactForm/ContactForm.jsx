import React,{useState } from 'react';
// import React from 'react'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";


const ContactForm = () => {

  const [name, setName] = useState("Rohan")
  const [email, setEmail] = useState("ravi@gmail.com")
  const [text, setText] = useState("hello")



const onSubmit = (e)=>{
  e.preventDefault();
  setName(e.target[0].value);
  setEmail(e.target[1].value);
  setText(e.target[2].value);


}


  return (
    <>
    <section className='style'>
        <Button text = " VIA SUPPORT CHAT" icon = {<MdMessage/>}/>
        <Button  text = " VIA CALL" icon = {<MdCall />} />
   

    </section>
    <div className='mail_btn'>
    <Button  text = " VIA MAIL" icon = {<MdMail/>} />

    </div>
    <form onSubmit={onSubmit}>
      <div className='form_contact'>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' />
        
      </div>
      <div className='form_contact'>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' />
        
      </div>
      <div className='form_contact'>
        <label htmlFor="text">Text</label>
        <input type="text" id='text' name='text' />
        
      </div>
      <div style={{
  display:"flex",
  justifyContent:"end",
}}>
<Button text = " Submit" type = "submit"/>

</div>
<div>{name +" "+ email +" "+ text}</div>
    </form>

<div>
  <img src="/images/contact.svg" alt="" />
</div>
    </>
    
  )
}

export default ContactForm