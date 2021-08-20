import React from 'react';

function Header(){
    return(
        <div className="
        text-blue-600
        h-full
        pt-5
        px-28
        flex
        justify-between
        ">
            <img src="/images/logo2.png" alt="Rick and Morty" className="w-96 h-32" />
            <h2 className="text-5xl font-rick ">NextJS</h2>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <a  href="/">Busca</a>
        </div>
    )
}

export { Header };