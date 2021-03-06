import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../api';

import './ContactUs.scss';

const ContactUs = () => {
  const history = useHistory();
  const [mail, setMail] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const { name, email, phoneNumber, message } = mail;
  const [loading, setLoading] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const goToSurvey = () => history.push('/survey');

  const onInputChange = (e) => {
    setMail({
      ...mail,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await api.contactUs({
        from: email,
        to: 'grandmaemmastech@gmail.com',
        subject: `Testimonial from ${name}`,
        phoneNumber,
        html: ` <div>
            <p><strong>Name</strong>: ${name}</p>
            <hr />
            <p><strong>Phone Number</strong>: ${phoneNumber}</p>
            <br />
            <p><strong>Message</strong>: ${message}</p>
          </div>`,
      });
      setMail({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
      setConfirmationMessage('Your email has been sent.  Thank you!');
      setLoading(false);
    } catch (error) {
      setErrorMessage(error);
      console.log({error})
    }
  };


  return (
    <section className='contact-us'>
      <div className='contact-us-wrapper'>
        <h1 className='emailform-header'>Contact Us Today</h1>
        <p className='emailform-text'>
          The taste is so incredibly rich and flavorful that everyone will think
          it came straight from your oven instead of ours.
        </p>
        <form
          className='emailform-form'
          id='email-form'
          onSubmit={(e) => onFormSubmit(e)}
        >
          <input
            className='emailform-form-input'
            name='name'
            type='text'
            placeholder='Name*'
            id='name'
            onChange={(e) => onInputChange(e)}
            value={mail.name}
          />
          <input
            className='emailform-form-input'
            name='email'
            type='email'
            placeholder='Email*'
            id='email'
            onChange={(e) => onInputChange(e)}
            value={mail.email}
          />
          <input
            className='emailform-form-input'
            name='phoneNumber'
            type='tel'
            placeholder='Phone Number'
            id='phone-number'
            onChange={(e) => onInputChange(e)}
            value={mail.phoneNumber}
          />
          <textarea
            className='emailform-form-input'
            name='message'
            placeholder='Message'
            id='email-message-input'
            cols='30'
            rows='5'
            onChange={(e) => onInputChange(e)}
            value={mail.message}
          ></textarea>
          <button className='submit-btn' type='submit' id='submit-button'>
            Submit
          </button>
          <button
            className='survey-btn'
            type='button'
            role='survey-button'
            id='survey-button'
            onClick={goToSurvey}
          >
            Please take our survey
          </button>
          {confirmationMessage ? (
            <>
              <h4 className='msg confirmation-msg'>{confirmationMessage}</h4>
            </>
          ) : errorMessage ? (<>
            <h4 className='msg error-msg'>{errorMessage}</h4>
          </>) : <></>}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
