import React, { FormEvent, ReactNode, useContext, useState } from 'react'
import UserInput from '../DumbComponent/UserInput'
import { useAuth, UserContext } from '../../Context/UserContext';
import UserInfo from '../UserInfo/UserInfo';
import { AuthContext } from '../../Context/ReducerUserContext';


function UserManagement() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const context = useContext(UserContext);
    const {login} = useAuth();
    // const context = useContext(AuthContext);

    if(!context){
      throw new Error("Login must be used within an AuthProvider");
    }

    // const {dispatch} = context;

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        if(!username || !password){
            return;
        }
        // some kind of API call to verify the user credentials
        console.log({username, password});
        if(context){
          context.login(username, password)
          login();
        }
        // dispatch({type: 'LOGIN', payload: {username, password}})
    }

  return (
    <>
        {/* <UserInfo/> */}
        <UserInput username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleSubmit={handleSubmit}/>
    </>
  )
}

export default UserManagement