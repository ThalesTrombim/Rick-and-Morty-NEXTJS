import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Header(){
    const [ mobileActive, setMobileActive ] = useState(false);
    const { user } = useContext(AuthContext);

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
                    md:flex
                    md:items-center
                    md:gap-12
                '>
                    <a href="/">Home</a>
                    <a href="/search">Search</a> 
                    <a href="/developer">Developer</a>
                    <a href="login" className='
                        border-gray-400
                        md:border-2
                        md:rounded-xl
                        md:w-32
                        md:h-14
                        md:flex
                        md:items-center
                        md:justify-center
                        hover:bg-blue-button-primary
                    '>
                        { user ? `${ user }` : 'login' }
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
                        { user ? `Hi, ${ user }` : 'login' }
                    </a>       
                </div>
                )
            }
        </div>
    )
}

export { Header };