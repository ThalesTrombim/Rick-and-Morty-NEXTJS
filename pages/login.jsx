import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../src/contexts/AuthContext';
import { Modal } from '../src/components/Modal';
import { ModalContext } from '../src/contexts/ModalContext';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const { signIn, user } = useContext(AuthContext);
    const { setActive, error, setError } = useContext(ModalContext);

    async function handleSignIn(data) {
            const res = await signIn(data);

            if(!res.error){
                return
            } 
            setActive(true)
            setError({ type:'Error', msg: res.error})
            
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
            <Modal text={error} />

                <div className='lg:flex lg:w-11/12 xl:w-55% shadow-xl'>
                    <div className='w-45% rounded-l-xl'
                        style={{backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: '-845px -200px', backgroundRepeat: 'no-repeat', backgroundImage: `url('images/backgrounds/main-bg.png')`}}
                        >
                            {/* { user && (
                                <p>{user}</p>
                            )} */}
                    </div>

                    <form className='
                            bg-white 
                            flex 
                            flex-col 
                            items-center 
                            lg:w-55%
                            justify-center
                            py-6
                            gap-8
                            rounded-xl
                            lg:rounded-r-xl
                            lg:rounded-l-none
                            xl:py-24
                            shadow-xl
                        ' 
                        onSubmit={handleSubmit(handleSignIn)}>

                        <span className='text-4xl font-semibold text-blue-button-primary'>Login</span>

                        <input 
                            {...register('email')}
                            className='w-5/6 h-12 border-b-2 border-gray-400 focus:outline-none focus:border-0' 
                            type="email" 
                            placeholder='email'
                            name='email'
                        />

                        <input 
                            {...register('password')}
                            className='mt-6 w-5/6 h-12 border-b-2 border-gray-400 focus:outline-none focus:border-0' 
                            type="password" 
                            placeholder='password'
                            name='password'  
                        />

                        <div className='flex flex-col items-center py-6 gap-6 px-3'>
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
                                login
                            </button>

                            <p>
                                don't you have an account?
                                <a className='text-blue-button-primary' href="/register"> Create an account</a>
                            </p>
                        </div>
                    </form>
                </div>
                
        </div>
    )
}