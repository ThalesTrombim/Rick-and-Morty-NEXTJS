import { createContext, useState } from 'react';

export const ModalContext = createContext({});

export function ModalProvider({ children }) {
    const [ active, setActive ] = useState(false)
    const [ modalInfo, setModalInfo ] = useState({});

    return (
        <ModalContext.Provider value={{ active, setActive, modalInfo, setModalInfo }}>
            { children }
        </ModalContext.Provider>
    )
}