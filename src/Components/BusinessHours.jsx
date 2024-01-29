import { useState, useEffect } from 'react';

const BusinessHours = () => {
  const [currentDay, setCurrentDay] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Update current day and time every second
    const interval = setInterval(() => {
      const now = new Date();
      const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
      const timeOfDay = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  
      setCurrentDay(dayOfWeek);
      setCurrentTime(timeOfDay);
  
      // Check if the business is open based on your business hours logic
      setIsOpen(checkBusinessHours(now));
    }, 1000);
  
    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);
  

  // Example business hours logic (adjust as per your business hours)
  const checkBusinessHours = (date) => {
    const dayOfWeek = date.getDay();
    const currentHour = date.getHours();
    const openingHour =8; // Example: Business opens at 8 AM
    const closingHour = 18; // Example: Business closes at 6 PM
    const closingMinute = 30;
  
    // Check if it's a weekday and within business hours
    return (
      dayOfWeek >= 1 &&
      dayOfWeek <= 6 &&
      currentHour >= openingHour &&
      (currentHour < closingHour || (currentHour === closingHour && date.getMinutes() <= closingMinute))
    );
  };

  return (
    <div className="text-left text-slate-600 md:text-xl md:leading-normal ml-2 md:ml-40">
      <h2 className="text-[10px]">Open Monday - Saturday <br/><span className="font-bold">(8:00AM to 6:30PM)</span></h2>
      <p className="text-[9px] font-semibold">Today is {currentDay} {currentTime}</p>
      {isOpen ? (
        <p className="text-[9px]">We are currently open!</p>
      ) : (
        <p className="text-[9px]">We are currently closed.</p>
      )}
    </div>
  );
};

export default BusinessHours;
