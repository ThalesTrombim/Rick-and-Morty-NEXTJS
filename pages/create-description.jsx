import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../src/contexts/AuthContext';
import { ModalContext } from '../src/contexts/ModalContext';
import { Modal } from '../src/components/Modal';

export default function Register() {
    const { register, handleSubmit } = useForm();
    const { createAccount } = useContext(AuthContext);
    const { setActive, error, setError } = useContext(ModalContext);

    async function handleCreateAccount(data) {
        const res = await createAccount(data);

        if(!res.error){
            return
        }
        console.log(res.error)

        setActive(true)
        setError({ type: 'Error', msg: res.error });
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
            <Modal text={ error }/>

                <div className='lg:flex w-11/12 shadow-xl'>
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
                    onSubmit={handleSubmit(handleCreateAccount)}>

                        <span className='text-blue-button-primary font-semibold text-3xl'>Create character description</span>

                        <div>
                            <img src="" alt="" />
                            <p>Morty Sanchez</p>
                        </div>

                        <select name="" id="">
                            <option value="">Character Ref:</option>
                        </select>

                        <input 
                            {...register('name')}
                            className=' w-5/6 h-12 border-b-2 border-gray-400 focus:outline-none focus:border-0' 
                            type="text" 
                            placeholder='Image URL:'
                            name='image_url'
                        />

                        <textarea 
                            name="description" 
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