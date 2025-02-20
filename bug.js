```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the initial render
    console.log('Mounted');
    // Forgot to return a cleanup function
    // This will cause memory leak if component unmounts before this effect completes
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // ... process data ...
      });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```