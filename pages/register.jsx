import { Header } from '../src/components/Header';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../src/contexts/AuthContext';
import { ModalContext } from '../src/contexts/ModalContext';
import { Modal } from '../src/components/Modal';

export default function Register() {
    const { register, handleSubmit } = useForm();
    const { createAccount } = useContext(AuthContext);
    const { setActive, textError, setTextError } = useContext(ModalContext);

    async function handleCreateAccount(data) {
        const res = await createAccount(data);

        if(!res.error){
            return
        }

        setActive(true)
        setTextError(res.error);
    }

    return (
        <div className='bg-homebg-dark h-screen'>
            <Header />
            <Modal text={textError}/>

            <div className='md:w-5/6 md:mx-auto md:mt-40 bg-card-bg rounded-xl md:flex'>

                <div className='md:w-1/3 text-center md:rounded-l-xl md:py-10 text-white'>

                    <form className='md:flex md:flex-col md:p-5 md:gap-10' onSubmit={handleSubmit(handleCreateAccount)}>

                        <span className='text-xl'>Create account</span>

                        <input 
                            {...register('name')}
                            className='md:h-12 md:rounded-full md:pl-4 bg-transparent border-2 border-black' 
                            type="text" 
                            placeholder='name'
                            name='name'
                        />

                        <input 
                            {...register('email')}
                            className='md:h-12 md:rounded-full md:pl-4 bg-transparent border-2 border-black' 
                            type="email" 
                            placeholder='email'
                            name='email'
                        />

                        <input 
                            {...register('password')}
                            className='md:h-12 md:rounded-full md:pl-4 bg-transparent border-2 border-black' 
                            type="password" 
                            placeholder='password'
                            name='password'    
                        />

                        <input 
                            // {...register('password')}
                            className='md:h-12 md:rounded-full md:pl-4 bg-transparent border-2 border-black' 
                            type="password" 
                            placeholder='repeat password'
                            name='password'    
                        />

                        <div className='md:flex md:justify-center font-semibold'>

                            <button className='bg-blue-700 rounded-full py-3 px-20' type='submit'>
                                create account
                            </button>
                        </div>
                    </form>
                </div>
                <div 
                    className='bg-red-500 md:w-2/3 md:rounded-r-xl bg-cover'
                    style={{backgroundImage: `url('images/login.png')`}}
                    >
                </div>
            </div>

        </div>
    )
}