import React from 'react';

function Header(){
    return(
        <div className="
            absolute 
            text-white
            font-semibold
            text-2xl
            lg:flex
            lg:w-full
            lg:py-6
            lg:px-3
        "
        >
            <div className="
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
                <div className='
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
        </div>
    )
}

export { Header };