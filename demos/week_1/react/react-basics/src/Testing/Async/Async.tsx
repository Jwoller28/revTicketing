import React, { useEffect, useState } from 'react'

function Async() {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setData('Hello, Async!'), 1000);
        return () => clearTimeout(timer);
    }, []);

  return (
    <div>
        {data || 'Loading...'}
    </div>
  )
}

export default Async