import React, { useState } from 'react';

import style from './contact.module.scss';

const Contact = () => {
  
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ status, setStatus ] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({ name, email, message });
		setStatus(true);
	}

	const handleChange = (event) => {
		// console.log(event.target.name);
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
					<form name="contact" method="POST" data-netlify="true">
						<div className={style['form-group']}>
							<label>Enter your name</label>
							<input placeholder="Enter name" onChange={handleChange} id="name" name="name" />
						</div>
						
						<div className={style['form-group']}>
							<label>Email address</label>
							<input type="email" placeholder="Enter email" onChange={handleChange} id="email" name="email" />
						</div>

						<div className={style['form-group']}>
							<label>Your inquiry</label>
							<textarea placeholder="What can I assist you with?" onChange={handleChange} id="message" name="message" />
						</div>
						
						<button type="submit" className={style['submit']} onClick={handleSubmit}>Submit</button>
						
					</form>	
				) : (
					<div className={style['complete-container']}>
						<h2>Complete!</h2>
					</div>
				) }
				
			</div>

		</div>
	);
}

export default Contact
