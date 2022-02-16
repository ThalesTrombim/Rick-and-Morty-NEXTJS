import { useState, useEffect } from 'react';
import Card from '../src/components/Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Search() {
    const [character, setCharacter ] = useState([]);
    const [ height, setHeight ] = useState('h-screen');
    const [ marginImg, setMarginImg ] = useState('mt-28');

    const [width, setWidth] = useState(0);
        useEffect(() => {
            setWidth(window.innerWidth);
    }); 

    var bg = '';
    if(width >= 400 ){
        bg = "url('images/bg-search-black.jpg')"
    }

    function findCharacter(){
        setCharacter([]);
        const searchInput = document.getElementById('search');
        const search = document.getElementById('search').value;

        fetch('https://rickandmortyapi.com/graphql/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "query": `query {
                characters(filter: { name: "${search}" }) {
                    info {
                        count
                    }
                    results {
                        id
                        name
                        image
                        gender
                        species
                        status
                        location {
                                name
                            }
                    }
                }
            }`})
        })
        .then((res) => res.json())
        .then((resposta) => {
            for(var i = 0; i < resposta.data.characters.results.length; i++){
                const characterFinded = resposta.data.characters.results[i];
                var atualizado = [...atualizado, characterFinded];
            }
            var characters = atualizado;
            characters.shift();
            setHeight('h-full');
            setMarginImg('-mt-80')
            setCharacter(characters);

            searchInput.value = '';
        })

    }

    return (
        <div className={`
            w-full 
            bg-gradient-to-r
            from-main-background-left 
            to-main-background-right  
            ${height} 
            h-full
            pt-16
            lg:pt-40
            text-white
            `}
            >
            <div className="flex flex-col items-center">
                <form onSubmit={(e) => {
                        e.preventDefault();
                        findCharacter();
                    }}
                    className='w-full flex flex-col gap-6'
                >
                    <div className='text-white flex flex-col gap-3 items-center'>
                        <h2 className='font-semibold text-3xl lg:text-6xl '>
                            Find a character
                        </h2>
                        <p className='text-xl lg:text-3xl'>type any character</p>
                    </div>
                    <div className='w-full flex justify-center items-center px-2 pb-6 xl:w-2/3 xl:m-auto'>
                        <img width='30' src="images/assets/lupa.png" alt="search" className='-mr-10 z-10'/>
                        <input id="search" className="text-black w-full lg:w-1/2 h-16 rounded-xl text-3xl pl-12 focus:border-transparent" type="text" />
                        <button className="bg-blue-button-primary w-32 h-12 rounded-xl -ml-36">
                            Search 
                        </button>
                    </div>
                </form>
                <div className='
                    w-full
                    bg-gradient-to-r
                    from-main-background-left 
                    to-main-background-right 
                    flex
                    justify-center
                '>
                    {
                        character != '' ? (
                            <div className='
                                w-full
                                grid
                                grid-cols-1
                                gap-6
                                px-6 
                                z-10
                                lg:grid
                                lg:grid-cols-3 
                                lg:gap-6 
                                xl:w-2/3
                                xl:grid-cols-5 
                            '>
                                {character.map( item => ( 
                                    <Card character={ item } />
                                ))}

                            </div>
                        ) : (
                            <div className=''>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={marginImg}>
                <img className='mt-auto ml-auto' src="/images/backgrounds/rick-portal.png" alt="" />
            </div>
        </div>
    );
}
