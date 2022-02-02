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
        <div className={`md:w-full bg-homebg-dark ${height} md:flex justify-center`}>
            <div className="flex lg:w-full md:pt-32 md:flex-col gap-10">
                <form onSubmit={(e) => {
                        e.preventDefault();
                        findCharacter();
                    }}
                    className='flex items-center gap-2 justify-center'
                >
                    <img width='25' src="images/icons/lupa.png" alt="search" className='-mr-12 z-10'/>
                    <input id="search" className="lg:w-2/4 lg:h-12 rounded-lg pl-12 text-xl" type="text" />
                    <button className="bg-blue-600 w-20 h-10 rounded-lg text-white font-bold -ml-24 focus:border-none">
                        Search 
                    </button>
                </form>
                <div className='w-full flex lg:grid lg:grid-cols-3 lg:gap-10 lg:px-10'>
                    {character.map( item => ( 
                        <Card character={ item } />
                    ))}
                </div>
            </div>

        </div>
    );
}
