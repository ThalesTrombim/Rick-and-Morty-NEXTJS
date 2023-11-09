import React from 'react';

export default function CharacterItem({ character }) {
    const backgroundImageName = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    return (
        <div className="h-screen w-full md:h-screen bg-cover bg-center p-6 md:px-11 flex items-center justify-center" style={{backgroundImage: `url('/images/backgrounds/detailsPage/image-${backgroundImageName}.jpg')`}} >
            <div className="md:flex bg-white align-center justify-between gap-3">
                <div className=''>
                    <img className="md:w-auto w-full" src={character.image} />
                </div>
                <div className="grid p-2 md:p-3 md:pt-12 gap-1 md:w-2/3 flex-wrap">
                    <h2 className="md:text-2xl text-xl text-purple font-bold">{character.name}</h2>
                    <div className="flex text-sm items-center justify-between my-12 md:mb-0">
                        <p className=""><strong>Status:</strong> {character.status}</p>
                        <p className=""><strong>Origin:</strong> {character.origin.name}</p>
                        <p className=""><strong>Species:</strong> {character.species}</p>
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

    return {
        props: {
            character: json.info,
        }
    };
}