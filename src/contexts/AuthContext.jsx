import { createContext, useState } from 'react';
import { setCookie } from 'nookies';
import { api } from '../services/api';

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState(null);

    const isAuthenticated = !!user;

    async function signIn({ email, password }){

        const res = await api.post('/login', { email, password }).catch( (error) => {
                console.log(JSON.stringify(error))
            }) 

        const { token, user } = res.data;

        console.log(token);

        setCookie(undefined, 'randm.token', token, {
            maxAge: 60 * 60 * 1, // 1 day
        })

        setUser(user)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
            { children }
        </AuthContext.Provider>
    )
}