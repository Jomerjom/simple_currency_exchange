import { useState, useEffect } from 'react';

export const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://data.fixer.io/api/latest?access_key=55a1dffac9be5b10fdccf4f8ccc7ed90&base=EUR")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
      data ? JSON.stringify(data, null, 2) : "Loading..."
  );
};
