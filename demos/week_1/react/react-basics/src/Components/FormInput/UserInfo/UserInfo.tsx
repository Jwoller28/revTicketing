import React, { useContext } from 'react'
import { useAuth, UserContext } from '../../Context/UserContext'
import { AuthContext } from '../../Context/ReducerUserContext';

function UserInfo() {
    const context = useContext(UserContext);
    // const context = useContext(AuthContext);
    const {logout} = useAuth();

    if(!context){
        throw new Error("UserInfo must be used within a user provider");
    }

    // const {state, dispatch} = context;

  return (
    <>
    {
        context.user && (
            <div>
                <p>Welcome, {context.user.username}</p>
                {/* <button onClick={() => dispatch({type: "LOGOUT"})}>Logout</button> */}
                <button onClick={() => {
                    context.logout();
                    logout();
                }}>Logout</button>
            </div>
        )
    }
    
    </>
  )
}

export default UserInfo