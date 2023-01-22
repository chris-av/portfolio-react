import { useState, FormEvent, ChangeEvent, createRef } from 'react';


export default function Contact() {
  
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ status, setStatus ] = useState(false);

  const layoutRef = createRef<HTMLDivElement>();

  const encode = (data : any) => {
    return Object.keys(data).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    }).join('&');
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(true);

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

    makeRequest();

  }

  const handleChange = (event : ChangeEvent<HTMLFormElement | HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.name === 'name') setName(event.target.value);
    if (event.target.name === 'email') setEmail(event.target.value);
    if (event.target.name === 'message') setMessage(event.target.value);
  }
    
  return (
    <div ref={layoutRef}>
      <div>
        
        <div className="w-full max-w-[500px] m-auto">
          
          <div className="mt-[80px] text-center">
            <h1 className="text-3xl">Contact Me</h1>
            <p className="text-xl my-2">Wanna work together? Hit me up!</p>
          </div>

          { status === false ? (
            <form name="contact" method="POST" data-netlify="true" action="/contact?success=true" onSubmit={handleSubmit}>
              <div className="p-[5px] my-[20px] border border-black rounded-lg flex flex-col">
                <label>Enter your name</label>
                <input placeholder="Enter name" onChange={handleChange} id="name" name="name" value={name} className="focus:outline-none p-[5px]" />
              </div>
              
              <div className="p-[5px] my-[20px] border border-black rounded-lg flex flex-col">
                <label>Email address</label>
                <input type="email" placeholder="Enter email" onChange={handleChange} id="email" name="email" value={email} className="focus:outline-none p-[5px]" />
              </div>

              <div className="p-[5px] my-[20px] border border-black rounded-lg flex flex-col">
                <label>Your inquiry</label>
                <textarea placeholder="What can I assist you with?" onChange={handleChange} id="message" name="message" value={message} className="focus:outline-none p-[5px]"  />
              </div>
              
              <button type="submit" className="text-xl w-full bg-[#13C253] text-white border-none rounded-md p-[10px] hover:bg-[#27D667]">Submit</button>
              
            </form> 
          ) : (
            <div className="font-bold text-center flex flex-col justify-center items-center h-[300px]">
              <h2>Thank you!</h2>
              <p>Let me review your request and I'll try to get back to you as soon as possible.</p>
            </div>
          ) }
          
        </div>

      </div>
    </div>
  );
}


