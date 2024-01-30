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
    }
  };

  return (
    <div className='p-2 w-full'>
      <form
        method='post'
        onSubmit={handleSubmit}
        className='flex flex-col items-center gap-4 bg-slate-200 p-2 sm:p-4 rounded-lg'
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
        <div className='flex flex-col sm:flex-row gap-2 w-full'>
          {/* ... rest of your form */}
        </div>
        <Button label='Send Message' type='submit' />
      </form>
    </div>
  );
};

export default Form;
