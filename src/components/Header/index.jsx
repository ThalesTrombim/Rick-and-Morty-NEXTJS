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
            lg:w-full
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
                <div className=''>
                    <a href="/">
                        <img src="/images/logo.png" alt="Rick and Morty" className="w-48 m-auto h-16" />
                    </a>
                </div>
                <div onClick={() => setMobileActive(!mobileActive)} className='sm:hidden'>
                    <img width={25} src="/images/icons/menu.png" alt="" />
                </div>
                <div className='
                    hidden
                    lg:flex
                    lg:items-center
                    lg:gap-12
                '>
                    <a href="/">Home</a>
                    <a href="/search">Search</a> 
                    <a href="/developer">Developer</a>
                    <a href="login" className='
                        border-gray-400
                        lg:border-2
                        lg:rounded-xl
                        lg:w-32
                        lg:h-14
                        lg:flex
                        lg:items-center
                        lg:justify-center
                        hover:bg-blue-button-primary
                    '>
                        login
                    </a>       
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
                    <a href="login">
                        login
                    </a>       
                </div>
                )
            }
        </div>
    )
}

export { Header };