import React, { useEffect, useState } from 'react'
import { fetchData } from './api'

function Component() {
    const [data, setData] = useState<any | null>(null);

    useEffect(() => {
        fetchData().then((result) => setData(result));
    }, [])

  return (
    <div>
        {data ? data[0].title : 'Loading...'}
    </div>
  )
}

export default Component