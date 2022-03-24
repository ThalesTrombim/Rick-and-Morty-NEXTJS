import React from 'react';
import data from '../../data';

export default function CharacterItem({ character, info }) {

    var name = character.name;

    if (!data[`${name}`]) {
        name = "Default";
    }

    return (
        <div className="w-full md:h-screen bg-cover bg-center p-2 md:px-11 flex items-center justify-center" style={{ backgroundImage: `url(${data[`${name}`].image})` }}>
            <div className="md:flex bg-white md:py-14 rounded-xl justify-around align-center">
                <div className=''>
                    <img className="md:w-auto w-full rounded-xl" src={character.image} />
                </div>
                <div className="grid md:w-1/2 p-2 md:p-0 gap-1">
                    <h2 className="md:text-7xl text-2xl text-purple font-bold">{character.name}</h2>
                    <div className="flex md:gap-4 text-sm items-center">
                        <p className="border-2 rounded-xl p-1">Gender: {character.gender}</p>
                        <p className="border-2 rounded-xl p-1">Status: {character.status}</p>
                        <p className="border-2 rounded-xl p-1">Species: {character.species}</p>
                    </div>
                    <p className={data[`${name}`].text} >{info.desc}</p>
                </div>

            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://rick-and-morty-nextjs-pearl.vercel.app/api/character/${id}`);
    const json = await res.json()

    let info;
    const urlBack = `${process.env.NEXT_PUBLIC_BACKEND}description/${id}`
    const infos_desc = await fetch(urlBack);

    if(infos_desc.status !== 400) {
        info = await infos_desc.json()
    } else {
        info = { desc : data.Default.description}
    }

    return {
        props: {
            character: json.info,
            info: info
        }
    };
}