export default function Card({ character }){
    return (
        <a key={character.id} href={`/character/${character.id}`} className='h-xl bg-card-bg rounded-xl mt-7 w-full'>
            <div className='w-full p-3 h-full flex flex-col justify-between bg-card-bg rounded-xl'>
                <img className="w-full h-56 rounded-xl" src={character.image} alt={character.name} />
                <div className='flex flex-col items-center gap-5'>
                    <div className='flex flex-col items-center text-center'>
                        <span className='font-medium text-2xl'>{ character.name }</span>
                        <span>{ character.species}</span>
                    </div>
                    <div className='flex justify-between w-full'>
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
        </a>
    )
}