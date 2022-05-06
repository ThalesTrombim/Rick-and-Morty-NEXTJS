import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import { api } from '../services/api';

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState(null);

    const isAuthenticated = !!user;

    useEffect( async () => {
        const { 'randm.token': token } = parseCookies();

        if(token){
            try {
                const res = await api.get('/profile');

                const { name } = res.data.decoded;
                setUser(name);

            } catch(err) {
                console.log(err.response.data)
            }
            
            // setUser(user)
        }

    }, [])

    async function signIn({ email, password }){

        try {
            const res = await api.post('/login', { email, password })
            const { token } = res.data;

            setCookie(undefined, 'randm.token', token, {
                maxAge: 60 * 60 * 24, // 1 day
            })

            const dataUser = await api.get('/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const { name } = dataUser.data.decoded;
            setUser(name);
            
            return token;

        } catch(err) {
            const error = err.response.data;
            
            return error;
        }
        
        
    }

    async function createAccount({ name, email, password }){
        try {

            const res = await api.post('/users', { name, email, password })
            console.log(res);
            
        } catch(err) {
            const error = err.response.data;

            return error
        }

        // setUser(user)

        // Router.push('/');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn, createAccount, setUser }}>
            { children }
        </AuthContext.Provider>
    )
}