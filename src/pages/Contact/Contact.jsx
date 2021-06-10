import React, { useState } from 'react';

import style from './contact.module.scss';

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
		<div className={style['container']}>
			
			<div className={style['form-container']}>
				
				<div className={style['call-to-action']}>
					<h1>Contact Me</h1>
					<p>Wanna work together? Hit me up!</p>
				</div>

				{ status === false ? (
					<form name="contact" method="POST" data-netlify="true" action="/contact?success=true" onSubmit={handleSubmit}>
						<div className={style['form-group']}>
							<label>Enter your name</label>
							<input placeholder="Enter name" onChange={handleChange} id="name" name="name" value={name} />
						</div>
						
						<div className={style['form-group']}>
							<label>Email address</label>
							<input type="email" placeholder="Enter email" onChange={handleChange} id="email" name="email" value={email} />
						</div>

						<div className={style['form-group']}>
							<label>Your inquiry</label>
							<textarea placeholder="What can I assist you with?" onChange={handleChange} id="message" name="message" value={message} />
						</div>
						
						<button type="submit" className={style['submit']}>Submit</button>
						
					</form>	
				) : (
					<div className={style['complete-container']}>
						<h2>Thank you!</h2>
						<p>Let me review your request and I'll try to get back to you as soon as possible.</p>
					</div>
				) }
				
			</div>

		</div>
	);
}

export default Contact
