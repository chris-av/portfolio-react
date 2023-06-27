"use client";
import { useState, FormEvent, ChangeEvent, } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLFormElement | HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.name === 'name') setName(event.target.value);
    if (event.target.name === 'email') setEmail(event.target.value);
    if (event.target.name === 'message') setMessage(event.target.value);
  }

  const encode = (data: any) => {
    return Object.keys(data).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    }).join('&');
  }

  async function makeRequest() {
    try {
      const response = await fetch('/', {
        method: "POST",
        body: encode({ 'form-name': 'contact', name, email, message }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const data = await response.json();
      console.log({
        response: {
          status: response.status,
          message: response.statusText
        },
        data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(true);
    makeRequest();
  }

  return (
    <div>
      {status === false ? (
        <form name="contact" method="POST" data-netlify="true" action="/contact?success=true" onSubmit={handleSubmit}>
          <div className="my-[20px] flex flex-col rounded-lg border border-black p-[5px]">
            <label>Enter your name</label>
            <input placeholder="Enter name" onChange={handleChange} id="name" name="name" value={name} className="p-[5px] focus:outline-none" />
          </div>

          <div className="my-[20px] flex flex-col rounded-lg border border-black p-[5px]">
            <label>Email address</label>
            <input type="email" placeholder="Enter email" onChange={handleChange} id="email" name="email" value={email} className="p-[5px] focus:outline-none" />
          </div>

          <div className="my-[20px] flex flex-col rounded-lg border border-black p-[5px]">
            <label>Your inquiry</label>
            <textarea placeholder="What can I assist you with?" onChange={handleChange} id="message" name="message" value={message} className="p-[5px] focus:outline-none" />
          </div>

          <button type="submit" className="w-full rounded-md border-none bg-[#13C253] p-[10px] text-xl text-white hover:bg-[#27D667]">Submit</button>

        </form>
      ) : (
        <div className="flex h-[300px] flex-col items-center justify-center text-center font-bold">
          <h2>Thank you!</h2>
          <p>Let me review your request and I'll try to get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  );
}
