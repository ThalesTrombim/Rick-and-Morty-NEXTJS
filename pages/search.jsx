import { useState, useEffect } from 'react';
import Card from '../src/components/Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Search() {
    const [character, setCharacter ] = useState([]);
    const [ height, setHeight ] = useState('h-screen');

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
            setCharacter(characters);

            searchInput.value = '';
        })

    }

    return (
        // <div className={`w-full bg-homebg-dark ${height} md:flex md:justify-center`}>
        //     <div className="flex w-full lg:w-full md:pt-32 md:flex-col bg-blue-400 gap-10 xl:w-2/3">
        //         <form onSubmit={(e) => {
        //                 e.preventDefault();
        //                 findCharacter();
        //             }}
        //             className='flex items-center gap-2 justify-center'
        //         >
        //             <img width='25' src="images/icons/lupa.png" alt="search" className='-mr-12 z-10'/>
        //             <input id="search" className="lg:w-2/4 lg:h-12 rounded-lg pl-12 text-xl xl:w-1/3" type="text" />
        //             <button className="bg-blue-600 w-20 h-10 rounded-lg text-white font-bold -ml-24 focus:border-none">
        //                 Search 
        //             </button>
        //         </form>
        //         {
        //             character != '' ? (
        //                 <div className='md:w-full md:flex lg:grid lg:grid-cols-3 lg:gap-10 lg:px-10 xl:grid-cols-5'>
        //                     {character.map( item => ( 
        //                         <Card character={ item } />
        //                     ))}
        //                 </div>
        //             ) : (
        //                 <div className='text-white flex flex-col items-center h-full pt-28 gap-5'>
        //                     <h3 className='font-semibold text-8xl'>
        //                         Find a character!
        //                     </h3>
        //                     <p className='font-semibold text-2xl'>
        //                         type a character name
        //                     </p>
        //                 </div>
        //             )
        //         }
        //     </div>
        // </div>
        <div className={`w-full bg-homebg-dark ${height} pt-40`}>
            <div className="">
                <form onSubmit={(e) => {
                        e.preventDefault();
                        findCharacter();
                    }}
                    className='flex items-center justify-center'
                >
                    <img width='25' src="images/icons/lupa.png" alt="search" className='-mr-12 z-10'/>
                    <input id="search" className="w-11/12 lg:w-2/4 h-12 rounded-lg pl-12 text-xl xl:w-1/3" type="text" />
                    <button className="bg-blue-600 w-20 h-10 rounded-lg text-white font-bold -ml-24 focus:border-none">
                        Search 
                    </button>
                </form>
                {
                    character != '' ? (
                        <div className='mx-auto w-11/12 flex flex-col items-center md:w-full xl:w-2/3 md:flex lg:grid lg:grid-cols-3 lg:gap-10 lg:px-10 xl:grid-cols-5'>
                            {character.map( item => ( 
                                <Card character={ item } />
                            ))}
                        </div>
                    ) : (
                        <div className='text-white flex flex-col items-center h-full pt-28 gap-5'>
                            <h3 className='font-semibold text-4xl md:text-8xl'>
                                Find a character!
                            </h3>
                            <p className='font-semibold text-2xl'>
                                type a character name
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
