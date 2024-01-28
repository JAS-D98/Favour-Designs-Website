import React, { useState } from 'react'
import Button from './Button';

const Form = () => {
    const [data, setData]=useState({name:"",email:"",phone:"",message:""});
    const handleChange =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data, [name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        alert("Enter all the fields!")
    }
  return (
    <div>
        <form method='post' onSubmit={handleSubmit} className='flex flex-col items-center gap-4 bg-slate-200 p-2 sm:p-4 rounded-lg'>
            <h1 className='text-2xl text-slate-600'>Contact <span className='text-firebrick'>Here</span></h1>
            <div className='flex items-center gap-2'>
                <label htmlFor="name" className='text-xl text-slate-600'>Name:</label>
                <input type="text" name="name" onChange={handleChange} id="" value={data.name} placeholder='Enter Your Name Here' className='w-80 sm:w-96 p-2 px-2 rounded-full bg-firebrick text-white outline-none'/>
            </div>
            <div className='flex items-center gap-2'>
                <label htmlFor="email" className='text-xl text-slate-600'>Email:</label>
                <input type="email" name="email" onChange={handleChange} id="" value={data.email} placeholder='Enter Your Email Address' className='w-80 sm:w-96 p-2 px-2 rounded-full bg-firebrick text-white outline-none'/>
            </div>
            <div className='flex items-center gap-2'>
                <label htmlFor="email" className='text-xl text-slate-600'>Phone:</label>
            <input type="phone" name="phone" onChange={handleChange} id="" value={data.phone} placeholder='Enter your Phone Number' className='w-80 sm:w-96 p-2 px-2 rounded-full bg-firebrick text-white outline-none'/>
            </div>
            <div className='flex flex-col sm:flex-row gap-2'>
            <label htmlFor="message" className='text-xl text-slate-600'>Email:</label>   
            <textarea name='message' id='' cols="30" rows="10" onChange={handleChange} value={data.message} placeholder='Enter Your Message Here...' className='bg-firebrick  text-white outline-none w-96 rounded-md p-4'/>
            </div>
            <Button label="Send Message" type='submit'/>
        </form>
    </div>
  )
}

export default Form