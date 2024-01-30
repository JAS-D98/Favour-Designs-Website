import React, { useState } from 'react';
import Button from './Button';

const Form = () => {
  const [data, setData] = useState({ name: '', email: '', phone: '', message: '' });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any field is empty
    if (Object.values(data).some((value) => value === '')) {
      setAlert({ type: 'error', message: 'Enter all the fields!' });
    } else {
      setAlert({ type: 'success', message: 'Form submitted successfully!' });

      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  };

  return (
    <div className='p-2 w-full'>
      <form
        method='post'
        onSubmit={handleSubmit}
        className='flex mx-auto max-w-md flex-col items-center gap-4 bg-slate-200 p-2 sm:p-4 rounded-lg'
      >
        <h1 className='text-2xl text-slate-600'>
          Contact <span className='text-firebrick'>Here</span>
        </h1>
        {/* Display alert */}
        {alert && (
          <div
            className={`w-full p-4 rounded-md ${
              alert.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {alert.message}
          </div>
        )}
        <div className='flex flex-col gap-2 w-full'>
        <div className='flex justify-start sm:items-center  gap-2 flex-col'>
                <label htmlFor="name" className='text-xl text-slate-600'>Name:</label>
                <input type="text" name="name" onChange={handleChange} id="" value={data.name} placeholder='Enter Your Name Here' className='w-full p-2 px-2 rounded-full bg-firebrick text-white outline-none'/>
            </div>
            <div className='flex justify-start sm:items-center gap-2 flex-col'>
                <label htmlFor="email" className='text-xl text-slate-600'>Email:</label>
                <input type="email" name="email" onChange={handleChange} id="" value={data.email} placeholder='Enter Your Email Address' className='w-full p-2 px-2 rounded-full bg-firebrick text-white outline-none'/>
            </div>
            <div className='flex justify-start sm:items-center gap-2 flex-col'>
                <label htmlFor="email" className='text-xl text-slate-600'>Phone:</label>
            <input type="phone" name="phone" onChange={handleChange} id="" value={data.phone} placeholder='Enter your Phone Number' className='w-full p-2 px-2 rounded-full bg-firebrick text-white outline-none'/>
            </div>
            <div className='flex flex-col gap-2'>
            <label htmlFor="message" className='text-xl text-slate-600'>Email:</label>   
            <textarea name='message' id='' cols="30" rows="10" onChange={handleChange} value={data.message} placeholder='Enter Your Message Here...' className='bg-firebrick  text-white outline-none w-full rounded-md p-4'/>
            </div>
        </div>
        <Button label='Send Message' type='submit' />
      </form>
    </div>
  );
};

export default Form;
