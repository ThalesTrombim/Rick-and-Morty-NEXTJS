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
                <div className='flex pr-6'>
                    <div onClick={() => setMobileActive(!mobileActive)} className='sm:hidden'>
                        {!mobileActive &&
                            <svg viewBox="0 0 100 80" width="40" height="20">
                                <rect width="80" height="10"></rect>
                                <rect y="30" width="80" height="10"></rect>
                                <rect y="60" width="80" height="10"></rect>
                            </svg>
                        }
                    </div>
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
                    absolute
                    right-0
                    z-10
                    border-2
                    mr-2
                    rounded-md
                    flex
                    flex-col
                    font-normal
                    justify-end
                    text-sm
                    md:hidden
                    sh
                '>
                    <div className='font-bold justify-end items-end text-right mr-4 mt-2' onClick={() => setMobileActive(!mobileActive)}>x</div>
                    <div className='flex
                        flex-col
                        gap-3
                        p-3
                        text-left
                        font-normal
                        text-sm'>
                        <a href="/">Home</a>
                        <a href="/search">Search</a>
                        <a href="/developer">Developer</a>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export { Header };