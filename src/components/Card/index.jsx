export default function Card({ character }){
    return (
        <a key={character.id} href={`/character/${character.id}`} className='
              bg-gradient-to-r
            from-main-background-left 
            to-main-background-right
        '>
            <div className=''>
                <img className="" src={character.image} alt={character.name} />
                <div className=''>
                    <div className=''>
                        <span className=''>{ character.name }</span>
                        <span>{ character.species}</span>
                    </div>
                    <div className=''>
                        <div className="">
                            <img className="" src={`/images/${character.species}.png`} alt={character.species} />
                            <p>{character.species}</p>
                        </div>
                        <div className="">
                            <img className="" src={`/images/${character.status}.png`} alt={character.status} />
                            <p>{character.status}</p>
                        </div>
                        <button className="">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </a>
    )
}