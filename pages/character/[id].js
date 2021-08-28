import React from 'react';
import data from '../../data';

export default function CharacterItem({info}) {
    var name = info.name;

    if(!data[`${name}`]){
        name = "Default";
    }

    return (
      <div className="w-full h-screen bg-cover bg-center px-11 flex items-center" style={{backgroundImage: `url(${data[`${name}`].image})`}}>
        <div className="w-1/2 h-1/2">
            <h2 className="text-7xl text-purple font-bold">{info.name}</h2>
            <div className="text-3xl text-white font-regular mt-5 drop-shadow-sm" >
                <p className="pb-5">{info.gender}</p>
                <p className="pb-5">{info.status}</p>
                <p>{info.origin.name}</p>
            </div>
                <p className={data[`${name}`].text} >{data[`${name}`].description}</p>
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