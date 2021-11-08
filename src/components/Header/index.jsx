import React from 'react';

function Header({ position }){
    return(
        <div className={`
        h-1/5
        top-0
        w-11/12 
        flex
        ${position}
        px-12
        text-white
        text-xl
        `}>
        <div className="m-auto ml-0 w-2/3 mt-6 flex items-center justify-between">
            <div>
                <a href="/">
                    <img src="/images/logo2.png" alt="Rick and Morty" className="w-48 m-auto h-16" />
                </a>
            </div>
            <div className="mr-10 mt-5 h-full w-8/12 flex justify-around">
                <a href="#">Home</a>  
                <a href="/search">Search</a>  
                <a href="#">About</a>  
            </div>
        </div>

        </div>
    )
}

export { Header };