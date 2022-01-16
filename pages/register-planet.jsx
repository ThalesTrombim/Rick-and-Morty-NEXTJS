import { useState } from 'react';
import { Header } from '../src/components/Header';

export default function Resgister() {
    const [ img, setImg ] = useState('images/planet.png')
    const input = 'md:w-full md:h-12 rounded-lg bg-transparent border-2 pl-3 text-lg';

    return (
        <div className='bg-homebg-dark h-screen'>
            <Header />

            <main className='md:flex md:w-9/12 md:m-auto md:mt-24'>
                <div className='bg-card-bg md:w-1/3 md:p-6 text-white rounded-l-xl'>
                    <form className='md:flex md:flex-col md:gap-10 items-center'>
                        <h2 className='md:text-2xl'>Register planet</h2>

                        <input 
                            className={input} 
                            type="text" 
                            placeholder='image' 
                            onChange={(e) => {
                                setImg(e.target.value)
                            }}
                        />

                        <input className={input} type="text" placeholder='id reference' />

                        <textarea 
                            required 
                            className='md:w-full md:h-52 rounded-lg bg-transparent border-2 resize-none'
                            placeholder='description'
                        >
                        </textarea>

                        <button className='md:w-2/3 md:h-12 bg-blue-700 rounded-full' type='submit'>Create</button>

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