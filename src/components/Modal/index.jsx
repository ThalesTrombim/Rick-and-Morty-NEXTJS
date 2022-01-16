import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

export function Modal({ text }) {
    const { active, setActive } = useContext(ModalContext);

    function closeModal(e) {
        if (e.target.id == "container") {
          setActive(false);
        }
    }

    return (
        active && (
            <div id='container' className='md:w-full md:h-full fixed bg-special flex flex-col' onClick={closeModal}>
                
                <div className='md:mt-40 md:w-2/4 md:mx-auto md:flex md:justify-end'>
                    <img onClick={() => setActive(false)} className='cursor-pointer' width={30} src="/images/icons/close.png" alt="Wrong" />
                </div>

                <main className='md:w-1/3 md:mx-auto md:mt-28'>

                    <div className='bg-red-600 rounded-t-2xl py-4 flex justify-center'>
                        <img width={110} src="/images/icons/wrong.png" alt="Wrong" />
                    </div>
                    <div className='bg-card-bg text-white flex flex-col items-center gap-8 py-8 rounded-b-2xl'>
                        <h3 className='font-bold text-4xl'>Ooops!</h3>
                        <span className='text-xl text-gray-300'>{ text }</span>
                        <button className='bg-blue-700 rounded-full py-3 px-10 font-medium'>
                            Try again
                        </button>
                    </div>
                </main>
            </div>
        )
    )
}