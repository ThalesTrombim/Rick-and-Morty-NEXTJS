import { useState } from 'react';
import { Header } from '../src/components/Header';
import Card from '../src/components/Card';

export default function Search() {
    const [character, setCharacter ] = useState([]);
    const height = character != '' ? 'h-full' : 'h-screen';

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
            setCharacter(characters);

            searchInput.value = '';
        })
    }
    
    return (
        <div className={`bg-homebg-dark ${height} text-white`}>
            <Header />
            <main className="md:bg-red-500 md:w-9/12 md:m-auto">
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        findCharacter();
                    }} 
                    className="w-10/12 m-auto text-center">
                        <label className="flex flex-col gap-y-8">
                            <h3 className="text-4xl">Pesquise por um personagem</h3>
                            <div className='flex justify-between'>
                                <input id="search" className="border-2 border-white rounded-full h-10 text-center bg-transparent" type="text" />
                                <button className="bg-blue-600 w-20 h-8 rounded-full m-auto">
                                    Search
                                </button>
                            </div>
                        </label>
                    </form>
                    {
                        character != '' ? (
                            <div className="flex flex-col items-center">
                                {character.map( item => (
                                    <Card character={ item } />
                                ))}
                            </div>
                        ) : <div></div>
                    }
                </div>
            </main>
        </div>
    );
}
