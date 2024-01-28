import { useState, useEffect } from 'react';

const Year = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const updateYear = () => {
          setCurrentYear(new Date().getFullYear());
        };
    // Update the current year on mount
    updateYear();

    // Set up a listener to update the year when a new year begins
    const intervalId = setInterval(updateYear, 60000); // Update every minute (adjust as needed)

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>{currentYear}</div>
  )
}

export default Year