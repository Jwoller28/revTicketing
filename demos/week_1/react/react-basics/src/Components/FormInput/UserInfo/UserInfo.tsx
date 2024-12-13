import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { AuthContext } from '../../Context/ReducerUserContext';

function UserInfo() {
    // const context = useContext(UserContext);
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("UserInfo must be used within a user provider");
    }

    const {state, dispatch} = context;

  return (
    <>
    {
        state.user && (
            <div>
                <p>Welcome, {state.user.username}</p>
                <button onClick={() => dispatch({type: "LOGOUT"})}>Logout</button>
            </div>
        )
    }
    
    </>
  )
}

export default UserInfo