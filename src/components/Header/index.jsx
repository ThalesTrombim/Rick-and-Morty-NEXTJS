import React from 'react';

function Header(){
    return(
        <div className="
        h-full
        w-11/12 
        m-auto
        flex
        px-12
        ">
        <div className="m-auto w-1/2 mt-6">
            <div className="h-1/2">
                <img src="/images/logo2.png" alt="Rick and Morty" className="w-96 m-auto h-36" />
            </div>
            <div className="flex justify-around pt-28 w-full">
                <a href="/search" className="rounded border-2 border-gray-400 w-44 flex items-center justify-center hover:bg-gray-400 h-10">Pesquisar</a>
                <a href="#" className="rounded w-44 h-10 flex items-center justify-center bg-purple">Saiba mais</a>
            </div>
        </div>

        </div>
    )
}

export { Header };