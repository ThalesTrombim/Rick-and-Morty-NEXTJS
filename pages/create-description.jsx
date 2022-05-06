import { useForm } from 'react-hook-form';
import { ModalContext } from '../src/contexts/ModalContext';
import { Modal } from '../src/components/Modal';
import { useState, useEffect, useContext } from 'react';
import { api } from '../src/services/api';
import { parseCookies } from 'nookies';
import { NextHead } from '../src/components/Head';

export default function Register({ count }) {
    const { register, handleSubmit } = useForm();
    const { setActive, modalInfo, setModalInfo } = useContext(ModalContext);
    const [ page, setPage ] = useState(1)
    const [ list, setList ] = useState([]);
    const [ characterSelected, setCharacterSelected ] = useState({})
    const [ character, setCharacter ] = useState({ name: 'Pickle Rick', image: 'https://rickandmortyapi.com/api/character/avatar/265.jpeg'})

    useEffect(async () => {
        const characters = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const completeList = await characters.json();
        const charactersList = completeList.results

        setList(charactersList)

    }, [page])
    useEffect(async () => {
        const char = await fetch(`https://rickandmortyapi.com/api/character/${characterSelected}`)
        const completeChar = await char.json();
        setCharacter(completeChar)
    }, [characterSelected])
    

    async function handleCreateDesc(data) {
        const { id_reference, desc, image } = data

        try {

            const res = await api.post('/description', { id_reference, desc, image })
            setActive(true)
            setModalInfo({ type:'Success', msg: res.data})

        } catch(err) {
            const error = err.response.data;

            setActive(true)
            setModalInfo({ type:'Error', msg: error.error})
            return error
        }
    }

    return (
        <div className='
            bg-gradient-to-r
            from-main-background-left 
            to-main-background-right 
            h-screen
            flex
            items-center
            justify-center
        '>
            <NextHead>
                Create description
            </NextHead>
            <Modal text={ modalInfo }/>

                <div className='lg:flex lg:w-11/12 xl:w-55% shadow-xl'>
                    <div className='w-45% rounded-l-xl'
                        style={{backgroundSize: 'contain', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundImage: `url('images/backgrounds/main-bg.png')`}}
                    >
                    </div>

                    <form className='
                            bg-white
                            rounded-xl
                            lg:rounded-l-none
                            lg:rounded-r-xl
                            flex
                            flex-col
                            items-center
                            lg:w-55%
                            gap-6
                            p-6
                            shadow-xl
                        ' 
                        onSubmit={handleSubmit(handleCreateDesc)}
                    >

                        <span className='text-blue-button-primary font-semibold text-3xl'>Create character description</span>

                        <div className='flex text-3xl font-semibold items-center gap-6'>
                            <img width='100' className='rounded-md' src={character.image} alt="" />
                            <p>{character.name}</p>
                        </div>

                        <div className='flex justify-between w-5/6'>
                            <select value={page} onChange={(e) => setPage(e.target.value)} className='w-1/6 h-12 border-b-2 border-gray-400 focus:outline-none focus:border-0' name="" id="">
                                <option selected disabled value=''>Page:</option>
                                {[...Array(count+1)].map((e, i) => (
                                     i != 0 && <option value={i} key={i}>{i}</option>
                                ))}
                            </select>

                            <select {...register('id_reference')}  onChange={(e) => setCharacterSelected(e.target.value)} value={characterSelected.name} className='w-2/3 h-12 border-b-2 border-gray-400 focus:outline-none focus:border-0' name="id_reference" id="">
                                <option value="">Character Ref:</option>
                                {list.map(character => (
                                    <option key={character.id} value={character.id}>{character.name}</option>
                                ))}
                            </select>
                        </div>

                        <input 
                            {...register('image')}
                            className=' w-5/6 h-12 border-b-2 border-gray-400 focus:outline-none focus:border-0' 
                            type="text" 
                            placeholder='Image URL:'
                            name='image'
                        />

                        <textarea 
                            name="desc"
                            {...register('desc')}
                            placeholder='Description:'
                            id="" 
                            className='border-2 rounded-lg w-5/6 resize-none h-40'
                        />

                        <div className=''>

                            <button className='
                                    bg-gradient-to-r
                                    from-blue-button-secondary-left
                                    to-blue-button-secondary-right
                                    rounded-xl
                                    h-12
                                    w-36
                                    text-white
                                    text-lg
                                ' 
                            type='submit'>
                                create
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export async function getStaticProps(context) {
    const result = await fetch(`https://rickandmortyapi.com/api/character`);
    const json = await result.json();

    
    // const charactersNames = completeList.data.characters.results

    return {
      props: { 
          count:json.info.pages, 
        }
    }
} 