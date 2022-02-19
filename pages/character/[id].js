import React from 'react';
import data from '../../data';

export default function CharacterItem({ info }) {
    var name = info.name;

    if (!data[`${name}`]) {
        name = "Default";
    }

    return (
        <div className="w-full md:h-screen bg-cover bg-center p-2 md:px-11 flex items-center justify-center" style={{ backgroundImage: `url(${data[`${name}`].image})` }}>
            <div className="md:flex bg-white bg-white md:py-14 rounded-xl justify-around align-center">
                <div>
                    <img className="md:w-auto w-full rounded-xl" src={info.image} />
                </div>
                <div className="grid md:w-1/2 p-2 md:p-0 gap-1">
                    <h2 className="md:text-7xl text-2xl text-purple font-bold">{info.name}</h2>
                    <div className="flex md:gap-4 text-sm items-center">
                        <p className="border-2 rounded-xl p-1">Gênero: {info.gender}</p>
                        <p className="border-2 rounded-xl p-1">Status: {info.status}</p>
                        <p className="border-2 rounded-xl p-1">Espécie: {info.species}</p>
                    </div>
                    <p className={data[`${name}`].text} >{data[`${name}`].description}</p>
                </div>

            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://rick-and-morty-nextjs-pearl.vercel.app/api/character/${context.params.id}`);
    const json = await res.json()

    return {
        props: {
            info: json.info
        }
    };
}