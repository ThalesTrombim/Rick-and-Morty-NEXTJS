import { useState, useEffect } from 'react';
import { Header } from '../src/components/Header';
import Card from '../src/components/Card';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Search() {
    const [character, setCharacter ] = useState([]);
    const height = character != '' ? 'h-full' : 'h-screen';
    
    const [width, setWidth] = useState(0);
        useEffect(() => {
            setWidth(window.innerWidth);
    }); 

    var bg = '';
    if(width >= 400 ){
        bg = "url('images/bg-search-black.jpg')"
    }

    function findCharacter(){

        setCharacter([]);

        const searchInput = document.getElementById('search');
        const search = document.getElementById('search').value;

        fetch('https://rickandmortyapi.com/graphql/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "query": `query {
                characters(filter: { name: "${search}" }) {
                    info {
                        count
                    }
                    results {
                        id
                        name
                        image
                        gender
                        species
                        status
                        location {
                                name
                            }
                    }
                }
            }`})
        })
        .then((res) => res.json())
        .then((resposta) => {
            for(var i = 0; i < resposta.data.characters.results.length; i++){
                const characterFinded = resposta.data.characters.results[i];
                var atualizado = [...atualizado, characterFinded];
            }
            var characters = atualizado;
            characters.shift();
            setCharacter(characters);

            searchInput.value = '';
        })
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '-20px',
        initialSlide: 1,
      };

    return (
        // <div className={`bg-homebg-dark ${height} text-white`}>
        //     <main className="md:bg-card-bg md:h-5/6 md:m-auto ">
        //         <div className='md:flex md:h-full'>
        //             <form onSubmit={(e) => {
        //                 e.preventDefault();
        //                 findCharacter();
        //             }} 
        //             className="w-10/12 md:w-2/5 text-center md:flex md:flex-col md:justify-center m-auto">
        //                 <label className="flex flex-col gap-y-8">
        //                     <h3 className="text-4xl md:text-5xl">Pesquise por um personagem</h3>
        //                     <div className='flex justify-between md:justify-center md:items-center md:gap-4'>
        //                         <input id="search" className="border-2 border-white rounded-full h-10 text-center bg-transparent md:w-68" type="text" />
        //                         <button className="bg-blue-600 w-20 h-8 rounded-full">
        //                             Search 
        //                         </button>
        //                     </div>
        //                 </label>
        //             </form>
        //             <div className='bg-homebg-dark md:h-full md:w-3/5 md:px-7 md:bg-center md:bg-cover md:items-center md:py-50' style={{backgroundImage: bg}}>
        //                 {
        //                     character != '' ? (
        //                         <div className="flex flex-col items-center md:flex-row md:h-full md:w-full">
        //                             { width >= 400 ? (
        //                                 <Slider {...settings} className='md:w-full md:h-full'>
        //                                     {character.map( item => ( 
        //                                         <Card character={ item } />
        //                                     ))}
        //                                 </Slider>
        //                             ) : 
        //                                 <>
        //                                     {character.map( item => ( 
        //                                         <Card character={ item } />
        //                                     ))}
        //                                 </>
        //                                 }
        //                         </div>
        //                     ) : <div></div>
        //                 }
        //             </div>
        //         </div>
        //     </main>
        // </div>

        <div className='md:w-full bg-homebg-dark h-screen md:flex'>
            <div className='bg-card-bg md:w-1/3'>
                
            </div>
            <div style={{backgroundImage: bg}} className='w-2/3'>
.
            </div>
        </div>
    );
}
