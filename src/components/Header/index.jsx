import React, { useState } from 'react';

function Header(){
    const [ mobileActive, setMobileActive ] = useState(false);

    return(
        <div className="
            absolute 
            text-white
            font-semibold
            text-2xl
            w-full
            lg:flex
            lg:py-6
            lg:px-3
        "
        >
            <div className="
                flex
                justify-between
                items-center
                px-6
                lg:w-full 
                lg:flex 
                lg:items-center 
                lg:justify-between
                xl:w-2/3
                xl:m-auto
            ">
                <div className="flex items-center content-around gap-12">
                    <a href="/">
                        <img src="/images/rick-and-morty-31028.png" alt="Rick and Morty" className="w-12" />
                    </a>
                </div>
                <div onClick={() => setMobileActive(!mobileActive)} className='sm:hidden'>
                    <img width={25} src="/images/icons/menu.png" alt="" />
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

            { mobileActive && (
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