import React from 'react';

function Header(){
    return(
        <div className="
        h-full
        w-11/12 
        m-auto
        px-12
        ">
            <div className="h-1/2 flex justify-between">
                <img src="/images/logo2.png" alt="Rick and Morty" className="w-80 h-28" />
                <div>
                    <input placeholder="Procure por um personagem" type="text" className="w-36 h-8 bg-transparent border-2 rounded-lg mt-16" />
                </div>
            </div>

            <div className="mt-36">
                <div className="flex h-9">
                    <a  className="w-36 flex items-center cursor-pointer justify-center bg-white mr-5 rounded">
                         Buscar 
                    </a>
                    <a className="w-48 flex items-center justify-center bg-gray-500 rounded">
                        Mais informações
                    </a>
                </div>
            </div>
        </div>
    )
}

export { Header };