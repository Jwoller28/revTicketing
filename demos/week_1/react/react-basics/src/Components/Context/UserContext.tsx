// interface to define the shape of the context value

import { createContext, ReactNode, useState } from "react";

export interface User {
    username: string;
    password: string;
}

interface UserContextType {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

// create the context with a default value
export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (username: string, password: string) => {
        setUser({username, password});
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

