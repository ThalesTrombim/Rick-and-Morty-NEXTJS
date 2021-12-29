import { Header } from '../src/components/Header';

export default function Login() {
    return (
        <div className='bg-homebg-dark h-screen'>
            <Header />

            <div className='bg-card-bg w-5/6 md:w-1/2 m-auto mt-40 md:mt-60 flex text-white flex-col items-center gap-8 text-2xl py-8 rounded-xl'>

                <span>Login</span>

                <form className='text-xl flex flex-col md:w-1/2 w-full px-2 md:px-0 gap-10' action="">
                    <input className='h-12 rounded-lg pl-2 bg-transparent border-2 border-gray-700' type="text" placeholder='name'/>

                    <input className='h-12 rounded-lg pl-2 bg-transparent border-2 border-gray-700' type="text" placeholder='password'/>
                </form>
            </div>

        </div>
    )
}