import { createContext, useState } from 'react';

export const ModalContext = createContext({});

export function ModalProvider({ children }) {
    const [ active, setActive ] = useState(false)
    const [ error, setError ] = useState({});

    return (
        <ModalContext.Provider value={{ active, setActive, error, setError }}>
            { children }
        </ModalContext.Provider>
    )
}