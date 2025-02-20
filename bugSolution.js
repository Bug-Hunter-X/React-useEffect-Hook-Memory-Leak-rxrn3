```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data', {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        if (isMounted) {
          setData(jsonData);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;
```