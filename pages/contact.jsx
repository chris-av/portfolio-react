import React, { useState } from 'react';
import styled from 'styled-components';

// import style from './contact.module.scss';

const Contact = () => {
  
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ status, setStatus ] = useState(false);

  const encode = data => {
    return Object.keys(data).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    }).join('&');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(true);
    console.log(encode({ name, email, message }));
    console.log('sending fetch!');
    fetch('/', {
      method: 'POST',
      body: encode({ 'form-name': 'contact', name, email, message }),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const handleChange = (event) => {
    if (event.target.name === 'name') setName(event.target.value);
    if (event.target.name === 'email') setEmail(event.target.value);
    if (event.target.name === 'message') setMessage(event.target.value);
  }
    
  return (
    <Container>
      
      <div className="form-container">
        
        <div className="call-to-action">
          <h1>Contact Me</h1>
          <p>Wanna work together? Hit me up!</p>
        </div>

        { status === false ? (
          <form name="contact" method="POST" data-netlify="true" action="/contact?success=true" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter your name</label>
              <input placeholder="Enter name" onChange={handleChange} id="name" name="name" value={name} />
            </div>
            
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="Enter email" onChange={handleChange} id="email" name="email" value={email} />
            </div>

            <div className="form-group">
              <label>Your inquiry</label>
              <textarea placeholder="What can I assist you with?" onChange={handleChange} id="message" name="message" value={message} />
            </div>
            
            <button type="submit" className="submit">Submit</button>
            
          </form> 
        ) : (
          <div className="complete-container">
            <h2>Thank you!</h2>
            <p>Let me review your request and I'll try to get back to you as soon as possible.</p>
          </div>
        ) }
        
      </div>

    </Container>
  );
}


const Container = styled.div`

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: center;
  font-family: inherit;

  .form-container {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }

  .call-to-action {
    margin: 20px 0;
    text-align: center;
    h1 { margin: 5px 0; }
  }

  .form-group {
    padding: 5px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    border: solid 1px grey;
    border-radius: 5px;

    label {
      font-size: 1rem;
    }

    input, textarea {
      min-height: 30px;
      margin-top: 5px;
      padding: 0 5px;
      border: none;
      background: none;
    }

    input,textarea:focus {
      outline: none;
    }

    textarea {
      height: 60px;
    }

  }

  .submit {
    box-sizing: border-box;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    margin: 20px auto;
    padding: 10px 0;
    background-color: #13C253;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover { cursor: pointer; background-color: #27d667; }
  }

  .complete-container {
    font-weight: 900;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
  }

`;


export default Contact


