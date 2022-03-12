import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'randm.token': token } = parseCookies();

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND,
})

if(token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
