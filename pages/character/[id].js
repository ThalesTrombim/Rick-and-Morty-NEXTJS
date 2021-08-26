import React from 'react';

export default function CharacterItem({info}) {
   
    return (
      <div className="w-full h-screen bg-cover bg-center px-11 flex items-center" style={{backgroundImage: `url('/images/characters/${info.name}.jpg')`}}>
        <div className="w-1/2 h-1/2">
            <h2 className="text-7xl text-purple font-bold">{info.name}</h2>
            <div className="text-3xl text-white font-regular mt-5 drop-shadow-sm" >
                <p className="pb-5">{info.gender}</p>
                <p className="pb-5">{info.status}</p>
                <p>{info.origin.name}</p>
            </div>
                <p className="w-4/5"> Rick é um cientista gênio, capaz de criar invenções científicas complexas, 
                    incluindo capacetes para melhorar o cérebro, dispositivos invasores de 
                    sonhos, portais para várias dimensões diferentes, várias armas de energia
                    e campos de força e o primeiro parque de diversões do mundo dentro do 
                    corpo de um ser humano .
                </p>
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