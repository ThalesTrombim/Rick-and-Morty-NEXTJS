export default function Card({ character }){
    return (
        <a href={`/character/${character.id}`} className=''>
            <div className=''>
                <img className="rounded-t-2xl w-full" src={character.image} alt={character.name} />
                <div className='rounded-b-2xl p-3 flex flex-col bg-gradient-to-r from-card-left to-card-right'>
                    <span className='font-semibold text-2xl'>{ character.name }</span>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-3 py-3'>
                            <div className="flex text-lg gap-3">
                                <img className="" width={28} src={`/images/icons/${character.species}.png`} alt={character.species} />
                                <p>{character.species}</p>
                            </div>
                            <div className="flex text-lg gap-3">
                                <img className="" width={28} src={`/images/icons/${character.status}.png`} alt={character.status} />
                                <p>{character.status}</p>
                            </div>
                        </div>
                        <button className="rounded-2xl bg-button-card h-11 w-24">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </a>
    )
}