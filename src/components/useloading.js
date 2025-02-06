import { useState, useEffect } from 'react';

function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleLoad = () => {
      setLoading(false);
      clearTimeout(timeoutId); // Clear the timeout if the load event fires first
    };

    // Set a timeout as a fallback
    timeoutId = setTimeout(() => {
      setLoading(false); // Set loading to false after 5 seconds (adjust as needed)
      window.removeEventListener('load', handleLoad); // Remove the event listener
    }, 5000); // Adjust the timeout duration as needed (e.g., 5000ms = 5 seconds)

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    };
  }, []);

  return loading;
}

export default useLoading;