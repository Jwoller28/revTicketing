import axios from 'axios';
import React, { useEffect, useState } from 'react'

export type Post = {
    id: string;
    userId: string;
    title: string;
    body: string;
}

function BasicAxios() {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => console.error('Error getting data, ', error));
    }, []);



  return (
    <>
        {loading ? <p>Loading...</p> : data.map((post) => <p key={post.id}>{post.title}</p>)}
    </>
  )
}

export default BasicAxios