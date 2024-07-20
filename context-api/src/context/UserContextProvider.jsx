import React, {useState} from 'react';
import userContext from './UserContext';

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    );
}
