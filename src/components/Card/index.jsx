


const round_icons = "bg-gradient-to-r from-blue-fim via-blue-meio  to-blue-comeco to-blue-comeco w-12 h-12 rounded-full flex";

export default function Card({ character }){
    return (
        <>
            <a key={character.id} href={`/character/${character.id}`} className="w-64">
                <div className="bg-cover w-64 bg-center bg-card-bg rounded-t-xl mt-5 md:mt-0">
                    <div className="rounded-b-xl pt-3">
                        <img className="w-11/12 h-56 m-auto" src={character.image} alt={character.name} />
                        <div className="p-3 mt-2 flex flex-col items-center overflow-y-hidden">
                            <h1 className="m-auto font-teste text-xl">{character.name}</h1>
                            <p className="text-xs" >{character.type}</p>
                        </div>
                        <div className="flex justify-around pb-1">
                            <div className={round_icons}>
                                <img className="w-8 h-8 m-auto" src={`/images/${character.species}.png`} alt={character.name} />
                            </div>
                            <div className={round_icons}>
                                <img className="w-7 h-7 m-auto" src={`/images/${character.status}.png`} alt={character.name} />
                            </div>
                            <div className={round_icons}>
                                <img className="w-7 h-7 m-auto" src={`/images/${character.gender}.png`} alt={character.name} />
                            </div>
                        </div>
                        <div className="flex justify-around pb-3">
                            <p>species</p>
                            <p>status</p>
                            <p>gender</p>
                        </div>
                        <div className="flex pb-3 justify-center">
                            <button className="bg-blue-500 py-1 px-3 rounded-full">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}