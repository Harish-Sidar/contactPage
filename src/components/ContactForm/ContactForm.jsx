import React from 'react'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";


const ContactForm = () => {
  return (
    <section className='style'>
        <Button text = " VIA SUPPORT CHAT" icon = {<MdMessage/>}/>
        <Button text = " VIA CALL" icon = {<MdCall/>}/>

    </section>
  )
}

export default ContactForm