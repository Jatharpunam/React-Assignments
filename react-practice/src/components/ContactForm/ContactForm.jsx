import React, { useState } from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import SubjectInput from './SubjectInput';
import MessageInput from './MessageInput';
import SendMessage from './SendMessage';
import './ContactForm.css'; 

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function clearForm() {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  function validateForm() {
    if (!name.trim()) {
      alert('Name is required');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      alert('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      alert('Enter a valid email address');
      return false;
    }

    if (!subject.trim()) {
      alert('Subject is required');
      return false;
    }

    if (!message.trim()) {
      alert('Message is required');
      return false;
    }

    return true;
  }

  function handleContactForm(event) {
    event.preventDefault();
    if (!validateForm()) return;

    const payload = { name, email, subject, message };
    localStorage.setItem('contactForm', JSON.stringify(payload));
    clearForm();
    alert('Form Submitted');
  }

  return (
    <div className='contactContainer'>
      <form className='formContainer' onSubmit={handleContactForm}>
        <NameInput inputType='text' onchange={setName} value={name} />
        <EmailInput inputType='email' onchange={setEmail} value={email} />
        <SubjectInput inputType='text' onchange={setSubject} value={subject} />
        <MessageInput onchange={setMessage} value={message} />
        <SendMessage inputType='submit' />
      </form>
    </div>
  );
};

export default ContactForm;
