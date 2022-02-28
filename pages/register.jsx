import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../src/contexts/AuthContext';
import { ModalContext } from '../src/contexts/ModalContext';
import { Modal } from '../src/components/Modal';

export default function Register() {
    const { register, handleSubmit } = useForm();
    const { createAccount } = useContext(AuthContext);
    const { setActive, modalInfo, setModalInfo } = useContext(ModalContext);

    async function handleCreateAccount(data) {
        const res = await createAccount(data);

        if(!res.error){
            return
        }
        console.log(res.error)

        setActive(true)
        setModalInfo({ type: 'Error', msg: res.error });
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
            <Modal text={ modalInfo }/>

                <div className='lg:flex w-11/12 xl:w-55% shadow-xl'>
                    <div className='w-45% rounded-l-xl'
                        style={{backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: '-845px -140px', backgroundRepeat: 'no-repeat', backgroundImage: `url('images/backgrounds/main-bg.png')`}}
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
                            gap-12
                            p-12
                            xl:py-24
                            shadow-xl
                        ' 
                    onSubmit={handleSubmit(handleCreateAccount)}>

                        <span className='text-blue-button-primary font-semibold text-4xl'>Register</span>

                        <input 
                            {...register('name')}
                            className=' w-5/6 h-12 border-b-2 border-gray-400 focus:outline-none focus:border-0' 
                            type="text" 
                            placeholder='name'
                            name='name'
                        />

                        <input 
                            {...register('email')}
                            className='w-5/6 h-12 border-b-2 border-gray-400 focus:outline-none focus:border-0' 
                            type="email" 
                            placeholder='email'
                            name='email'
                        />

                        <input 
                            {...register('password')}
                            className='w-5/6 h-12 border-b-2 border-gray-400 focus:outline-none focus:border-0' 
                            type="password" 
                            placeholder='password'
                            name='password'    
                        />

                        <div className='flex flex-col items-center gap-6'>

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
                                create account
                            </button>

                            <p>
                                You already have an account?
                                <a className='text-blue-button-primary' href="/login"> login</a>
                            </p>
                        </div>
                    </form>
                </div>
        </div>
    )
}