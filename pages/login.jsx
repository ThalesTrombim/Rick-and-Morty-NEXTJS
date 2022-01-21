import { Header } from '../src/components/Header';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../src/contexts/AuthContext';
import { Modal } from '../src/components/Modal';
import { ModalContext } from '../src/contexts/ModalContext';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const { signIn, user } = useContext(AuthContext);
    const { setActive, textError, setTextError, type, setType } = useContext(ModalContext);

    async function handleSignIn(data) {
            
            const res = await signIn(data);

            if(!res.error){
                return
            } 

            setActive(true)
            console.log(res)
            setType('Error')
            setTextError(res.error)
    }

    return (
        <div className='bg-homebg-dark h-screen'>
            <Modal text={textError} />

            <Header />

            <div className='md:w-5/6 md:mx-auto md:mt-40 bg-card-bg rounded-xl md:flex'>

                <div className='md:w-1/3 text-center md:rounded-l-xl md:py-16 text-white'>

                    <form className='md:flex md:flex-col md:p-5 md:gap-10' onSubmit={handleSubmit(handleSignIn)}>

                        <span className='text-xl'>Login</span>

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

                        <div className='md:flex md:justify-between font-semibold'>
                            <a className='bg-white text-black rounded-full py-3 px-4 cursor-pointer' type='submit'>
                                create account
                            </a>

                            <button className='bg-blue-700 rounded-full py-3 px-10' type='submit'>
                                login
                            </button>
                        </div>
                    </form>
                </div>
                <div 
                    className='bg-red-500 md:w-2/3 md:rounded-r-xl bg-cover'
                    style={{backgroundImage: `url('images/login.png')`}}
                    >
                        { user && (
                            <p>{user}</p>
                        )}
                </div>
            </div>

        </div>
    )
}