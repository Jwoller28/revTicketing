import axios from 'axios';
import React, { useState } from 'react'

function PostAxios() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios
            .post('https://jsonplaceholder.typicode.com/posts', {
                title,
                body,
                userId: 1
            })
            .then((response) => console.log("data posted, ", response.data))
            .catch((error) => console.error('Error posting data, ', error));

    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </label>
        <label>
            Body:
            <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

export default PostAxios