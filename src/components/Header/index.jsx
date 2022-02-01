import React from 'react';

function Header(){
    return(
        <div className="absolute w-full md:w-2/3" style={{marginLeft: 'calc(33% - 16.5%)'}}>
            <div className="text-white flex flex-col gap-5 pb-5 md:flex-row md:pl-8 md:m-auto md:justify-between md:items-center">
                <div className=''>
                    <a href="/">
                        <img src="/images/logo2.png" alt="Rick and Morty" className="w-48 m-auto h-16" />
                    </a>
                </div>
                <div className="flex justify-around md:w-1/2 md:self-end md:text-lg">
                    <a href="/">Home</a>
                    <a href="/search">Search</a>  
                    <a href="/about">About</a>
                    <a href="/developer">Developer</a>
                </div>
            </div>
        </div>
    )
}

export { Header };