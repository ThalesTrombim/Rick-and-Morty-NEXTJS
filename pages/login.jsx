import { Header } from '../src/components/Header';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../src/contexts/AuthContext';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    
    async function handleSignIn(data) {
        await signIn(data);
    }

    return (
        <div className='bg-homebg-dark h-screen'>
            <Header />

            <div className='bg-card-bg w-5/6 md:w-1/2 m-auto mt-40 md:mt-60 flex text-white flex-col items-center gap-8 text-2xl py-8 rounded-xl'>

                <span>Login</span>

                <form className='text-xl flex flex-col md:w-1/2 w-full px-2 md:px-0 gap-10' onSubmit={handleSubmit(handleSignIn)}>
                    <input 
                        {...register('email')}
                        className='h-12 rounded-lg pl-2 bg-transparent border-2 border-gray-700' 
                        type="email" 
                        placeholder='email'
                        name='email'
                    />

                    <input 
                        {...register('password')}
                        className='h-12 rounded-lg pl-2 bg-transparent border-2 border-gray-700' 
                        type="password" 
                        placeholder='password'
                        name='password'    
                    />

                    <button type='submit'>
                        login
                    </button>
                </form>
            </div>

        </div>
    )
}