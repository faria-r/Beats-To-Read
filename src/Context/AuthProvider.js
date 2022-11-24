import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import {getAuth} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const name="Faria"

    const authInfo={name}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;