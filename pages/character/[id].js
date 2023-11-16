import React from 'react';

export default function CharacterItem({ character }) {
    const backgroundImageName = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    return (
        <div className='flex items-center justify-center'>
            <div className="h-screen w-full md:h-screen bg-cover bg-center p-6 md:px-11 flex items-center justify-center" style={{backgroundImage: `url('/images/backgrounds/detailsPage/image-${backgroundImageName}.jpg')`}} >
                <div className="md:flex bg-white align-center justify-between gap-3 rounded-lg">
                    <div className='md:min-w-300px'>
                        <img className="md:w-auto w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none" src={character.image} />
                    </div>
                    <div className="grid p-3 md:pt-5 gap-1 md:w-2/3 flex-wrap">
                        <h2 className="md:text-2xl text-xl text-purple font-bold text-center md:text-left">{character.name}</h2>
                        <div className="flex text-lg items-center justify-between my-12 md:mb-0 gap-8 md:gap-20">
                            <div className='flex flex-col gap-8'>
                                <p className=""><strong>Status:</strong> {character.status}</p>
                                <p className=""><strong>Origin:</strong> {character.origin.name}</p>
                                <p className=""><strong>Species:</strong> {character.species}</p>
                        </div>
                        <div className='max-w-200px  flex flex-col gap-8'>
                                <p className=""><strong>Last known location:</strong> {character.location.name}</p>
                                <p className=""><strong>First seen in:</strong> {character.origin.name}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://rick-and-morty-nextjs-pearl.vercel.app/api/character/${id}`);
    const json = await res.json()

    const episode = await fetch(`http://localhost:3000/api/episode/${id}`);
    const epJson = await episode.json();

    return {
        props: {
            character: json.info,
            episode: epJson.info
        }
    };
}