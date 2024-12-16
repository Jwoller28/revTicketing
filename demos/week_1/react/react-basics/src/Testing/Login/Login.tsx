import React, { useState } from 'react'

interface LoginProps {
    onSubmit: (username: string) => void;
}

function Login({onSubmit}:LoginProps) {
  
    const [username, setUsername] = useState<string>('');

    const handleSubmit = () => onSubmit(username);

  return (
    <div>
        <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login