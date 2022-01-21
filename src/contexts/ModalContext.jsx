import { createContext, useState } from 'react';

export const ModalContext = createContext({});

export function ModalProvider({ children }) {
    const [ active, setActive ] = useState(false)
    const [ textError, setTextError ] = useState('');
    const [ type, setType ] = useState('')

    return (
        <ModalContext.Provider value={{ active, setActive, textError, setTextError, type, setType }}>
            { children }
        </ModalContext.Provider>
    )
}