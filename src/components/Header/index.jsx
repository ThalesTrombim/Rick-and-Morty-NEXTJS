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
        <div className="h-1/2 justify-between">
                <img src="/images/logo2.png" alt="Rick and Morty" className="w-80 h-28" />
                <img src="/images/rick.png" alt="Rick and Morty" className="w-80 h-80" />
        </div>

        <div>
            
        </div>

        </div>
    )
}

export { Header };