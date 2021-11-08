import { useState } from 'react';
import { Header } from '../src/components/Header';
import Card from '../src/components/Card';

export default function Search() {
    const [character, setCharacter ] = useState([]);

    function findCharacter(){
        setCharacter([]);
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
        })
    }
    
    return (
        <>
            <Header position="fixed" />
            <main className="bg-homebg-dark pb-10">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    findCharacter();
                }} 
                className="px-12 pt-28 text-white">
                    <label className="py-5 flex gap-5 items-center">
                        <h3 className="text-4xl">Pesquise por um personagem</h3>
                        <input id="search" className="h-10 text-center text-xl bg-transparent border border-gray-500 rounded-full w-1/4" type="text" />
                        <button className="bg-blue-500 rounded-full text-white font-semibold ml-10 py-2 px-3">
                            Search
                        </button>
                    </label>
                </form>
                {
                    character != '' ? (
                        <div className="grid grid-cols-4 pl-9">
                            {character.map( item => (
                                <Card character={ item }/>
                            ))}
                        </div>
                    ) : <div></div>
                }
            </main>
        </>
    );
}
