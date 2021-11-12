


const round_icons = "bg-gradient-to-r from-blue-fim via-blue-meio  to-blue-comeco to-blue-comeco w-12 h-12 rounded-full flex";

export default function Card({ character }){
    return (
        <>
            <a key={character.id} href={`/character/${character.id}`} className="">
                <div className="bg-cover w-68 pb-3 bg-center bg-card-bg rounded-xl mt-5 md:mt-0">
                    <div className="pt-3">
                        <img className="w-11/12 h-56 m-auto rounded-xl" src={character.image} alt={character.name} />
                        <div className="w-11/12 m-auto rounded-xl pb-3 px-2 pt-2 border-2 border-blue-400 mt-3">
                            <h3 className="font-teste text-2xl text-center">{character.name}</h3>
                            <p className="text-center text-sm">{character.type}</p>
                            <div className="flex justify-between pt-3 items-center">
                                <div className="flex flex-col items-center">
                                    <img className="w-8 h-8" src={`/images/${character.species}.png`} alt={character.species} />
                                    <p>{character.species}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img className="w-8 h-8" src={`/images/${character.status}.png`} alt={character.status} />
                                    <p>{character.status}</p>
                                </div>
                                <button className="bg-blue-500 h-10 py-1 px-3 rounded-full">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}