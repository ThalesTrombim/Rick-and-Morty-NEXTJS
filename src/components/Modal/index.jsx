import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

export function Modal({ text }) {
    const { active, setActive, type } = useContext(ModalContext);

    function closeModal(e) {
        if (e.target.id == "container") {
          setActive(false);
        }
    }

    var color = 'bg-green-1000';
    if(type === 'Error'){
        color = 'bg-red-700';
    }

    return (
        active && (
            <div id='container' className='md:w-full md:h-full fixed bg-special flex items-end justify-end' onClick={closeModal}>
                <div className='md:w-96 md:mb-20 md:mr-10 md:h-16 flex'>
                    <div className={`md:w-3 md:h-full ${color} md:rounded-l-md bg-green`}>
                    </div>
                    <div className='w-full bg-white flex items-center gap-4 pl-3'>
                        <img width={40} src={`images/icons/${type}.png`} />
                        <div>
                            <span>{ type }</span>
                            <p>
                                { text }
                            </p>
                        </div>
                    </div>
                    <div onClick={() => setActive(false)} className='md:rounded-r-md border-l-2 border-gray-100 w-20 hover:bg-gray-100 bg-white flex items-center justify-center text-gray-300 cursor-pointer'>
                        close
                    </div>
                </div>
            </div>
        )
    )
}