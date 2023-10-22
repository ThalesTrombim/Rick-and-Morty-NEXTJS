import React, { useState } from 'react';

function Header() {
    const [mobileActive, setMobileActive] = useState(false);

    return (
        <div className="
            container
            flex
            mx-auto
            absolute 
            font-semibold
            text-2xl
            w-full
            px-2
            py-8
            text-center
            transform -translate-x-1/2 left-1/2
      
        "
        >
            <div className="
                flex
                justify-between
                items-center
                w-full 
                lg:flex 
                lg:items-center 
                lg:justify-between
            ">
                <div className="flex items-center content-around gap-12">
                    <a href="/">
                        <img src="/images/rick-and-morty-31028.png" alt="Rick and Morty" className="w-12" />
                    </a>
                </div>
                <div onClick={() => setMobileActive(!mobileActive)} className='sm:hidden'>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                </div>
                <div className='
                    hidden
                    md:flex
                    md:items-center
                    md:gap-12
                    text-base
                '>
                    <a href="/">Home</a>
                    <a href="/search">Search</a>
                </div>
            </div>

            {mobileActive && (
                <div className='
                    bg-main-background-right 
                    flex
                    flex-col
                    gap-3
                    pl-6
                    py-3
                    font-normal
                '>
                    <a href="/">Home</a>
                    <a href="/search">Search</a>
                    <a href="/developer">Developer</a>
                </div>
            )
            }
        </div>
    )
}

export { Header };