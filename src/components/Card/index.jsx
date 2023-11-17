export default function Card({ character }) {
    return (
        <a href={`/character/${character.id}`} className="hover:rotate-2">
            <div className='border-2 rounded-lg w-auto'>
                <div className='rounded-2xl'>

                    <div className='flex flex-col justify-center items-center'>
                        <img className="w-40 m-6 rounded-full" src={character.image} alt={character.name} />

                        <span className='font-semibold text-sm uppercase'>{character.name}</span>
                        <p>{character.species}</p>
                        <p>{character.status}</p>
                        <button className="rounded-lg bg-green-1000 text-gray-100 h-11 w-24 my-6 text-sm">
                            Read more
                        </button>

                        {/* <img className="" width={28} src={`/images/icons/${character.species}.png`} alt={character.species} /> */}

                        {/* <img className="" width={28} src={`/images/icons/${character.status}.png`} alt={character.status} /> */}
                    </div>
                </div>
            </div>
        </a>
    )
}