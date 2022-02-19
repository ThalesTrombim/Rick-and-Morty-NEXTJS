import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../src/services/api';
import { parseCookies } from 'nookies';
import { ModalContext } from '../src/contexts/ModalContext';

import Router from 'next/router';
import { Modal } from '../src/components/Modal';

export default function Resgister() {
    const [ img, setImg ] = useState('images/planet.png')
    const input = 'w-full h-12 rounded-lg bg-transparent border-2 pl-3 text-lg';
    const { setActive, error, setError } = useContext(ModalContext);

    const { register, handleSubmit } = useForm();

    async function registerPlanet({ id_reference, description, image }) {
            const { 'randm.token': token } = parseCookies();

            try {
                const res = await api.post('/planets', { id_reference, description, image } , {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })

                if(res){
                    document.getElementById('image').value = '';
                    document.getElementById('id_reference').value = '';
                    document.getElementById('description').value = '';
                }
                
                console.log('res', res)

            } catch(err) {
                setActive(true)
                setError({ type: 'Error', text : err.response.data.errorCode })

                console.log(err.response.data)

                // setTimeout(() => {
                //     setActive(false)
                //     Router.push('/login')
                // }, 2000)
            }

    }

    return (
        <div className='bg-homebg-dark h-screen flex items-center justify-center'>
            <Modal text={ error } />

            <main className='w-11/12 mt-20 md:flex md:w-11/12 md:m-auto'>
                <div className='bg-card-bg md:w-1/3 md:p-7 text-white md:rounded-l-xl rounded-xl p-3'>
                    <form className='flex flex-col gap-5 md:gap-10 items-center' onSubmit={handleSubmit(registerPlanet)}>
                        <h2 className='text-2xl'>Register planet</h2>

                        <div 
                            style={{backgroundImage: `url(${img})` }}
                            className='w-full h-44 bg-cover bg-center md:hidden'
                        >
                            
                        </div>
                        <input 
                            id='image'
                            className={input} 
                            type="text" 
                            placeholder='image' 
                            onChange={(e) => {
                                setImg(e.target.value)
                            }}
                            {...register('image')}
                        />

                        <input
                            id='id_reference' 
                            className={input} 
                            type="text" 
                            placeholder='id reference' 
                            {...register('id_reference')}
                        />

                        <textarea 
                            id='description'
                            required 
                            className='w-full md:h-52 h-40 rounded-lg bg-transparent border-2 resize-none pl-3'
                            placeholder='description'
                            {...register('description')}
                        >
                        </textarea>

                        <button className='w-2/3 h-12 bg-blue-700 rounded-full' type='submit'>Create</button>

                    </form>
                </div>
                <div 
                    className='md:w-2/3 md:rounded-r-xl bg-cover'
                    style={{backgroundImage: `url(${img})` }}
                >
                </div>
            </main>
        </div>
    )
}