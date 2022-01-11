import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import { api } from '../services/api';

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState(null);

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'randm.token': token } = parseCookies();

        if(token){
            
        }

    }, [])

    async function signIn({ email, password }){

        const res = await api.post('/login', { email, password }).catch( (error) => {
                console.log(JSON.stringify(error))
            }) 

        const { token, user } = res.data;

        console.log(token);

        setCookie(undefined, 'randm.token', token, {
            maxAge: 60 * 60 * 24, // 1 day
        })

        setUser(user)

        Router.push('/');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
            { children }
        </AuthContext.Provider>
    )
}