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
            setUser(user)
        }

    }, [])

    async function signIn({ email, password }){

        try {
            const res = await api.post('/login', { email, password })
            const { token, user } = res.data;

            setCookie(undefined, 'randm.token', token, {
                maxAge: 60 * 60 * 24, // 1 day
            })

            setUser(user)

            Router.push('/');

            return user;

        } catch(err) {
            const error = err.response.data;
            
            return error;
        }
        
        
    }

    async function createAccount({ name, email, password }){
        const res = await api.post('/users', { name, email, password }).catch( (error) => {
            console.log(JSON.stringify(error))
        }) 

        console.log(res);

        // setUser(user)

        Router.push('/');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn, createAccount }}>
            { children }
        </AuthContext.Provider>
    )
}