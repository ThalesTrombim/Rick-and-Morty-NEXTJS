import { useState } from 'react';
import { Header } from '../src/components/Header';

export default function Search() {
    const [character, setCharacter ] = useState([]);
    
    function findCharacter(){
        const search = document.getElementById('search').value;

        fetch('https://rickandmortyapi.com/graphql/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "query": `query {
                characters(filter: { name: "summer" }) {
                    info {
                        count
                    }
                    results {
                        name
                        image
                        gender
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
            <div className="w-full h-screen flex flex-col items-center justify-center" style={{
                    backgroundSize: 'cover',
                    backgroundPosition:'center center', 
                    backgroundImage: `url('images/bg-search.jpg')`
                }}>
            <Header />
                <div className="w-2/5 h-2/5 flex flex-col text-center text-white text-3xl">
                    <p>Pesquise por um personagem</p>
                    {console.log(search)}
                    {character.map(item => {
                        <p>{item.name}</p>
                    })}
                    <div className="w-full mx-auto mt-20">
                        <input id="search" className="text-2xl border border-gray-500 text-white bg-transparent text-center w-10/12 rounded-full h-10" type="text" />
                        <button onClick={findCharacter}>ok</button>
                    </div>
                </div>
            </div>
        </>
    );
}
