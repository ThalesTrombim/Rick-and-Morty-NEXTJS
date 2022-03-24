import { NextHead } from '../src/components/Head'

export default function Developer() {
    return (
        <div id='container' className='
            bg-gradient-to-r
            from-main-background-left 
            to-main-background-right 
            pt-16
            lg:pt-0
            w-full
            h-screen
            flex
            items-center
            justify-center
            flex-col
            gap-6
            lg:gap-20
            '>
            <NextHead>
                Developer
            </NextHead>
            <main className='text-white flex flex-col lg:flex-row items-center lg:gap-12'>
                <div className='w-64 h-64 bg-cover rounded-full' style={{backgroundImage: `url('images/dev.jpg')`}}></div>
                <div className='lg:flex lg:flex-col lg:gap-3'>
                    <h3 className='text-4xl md:text-5xl font-semibold'>Thales</h3>
                    <h3 className='text-4xl md:text-5xl font-semibold'>Trombim</h3>

                    <p className='text-2xl'>
                        Software analyst and developer
                    </p>

                    <div className='flex mt-6 lg:gap-12 justify-between'>
                        <a href="https://github.com/ThalesTrombim" target="_blank" >
                            <img className='' width={48} src="/images/assets/github.png" alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/thalestrombim/" target="_blank" >
                            <img className='' width={48} src="/images/assets/linkedin.png" alt="linkedin" />
                        </a>
                        <a href="https://www.linkedin.com/in/thalestrombim/" target="_blank" >
                            <img className='' width={48} src="/images/assets/email.png" alt="email" />
                        </a>
                    </div>
                </div>
            </main>
                
                <h4 className='text-white font-bold text-2xl'>Contributor</h4>

            <div className='text-white flex items-center gap-6 lg:gap-12 lg:-mt-10'>
                <div className='w-36 h-36 bg-cover rounded-full' style={{backgroundImage: `url('https://github.com/deividsonsabino.png')`}}></div>
                <div className='lg:flex lg:flex-col lg:gap-3'>
                    <h3 className='text-3xl font-semibold'>Deivid Sabino</h3>

                    <p className='text-xl'>
                        Front End developer
                    </p>

                    <div className='flex mt-6 lg:gap-12 justify-between'>
                        <a href="https://github.com/ThalesTrombim" target="_blank" >
                            <img className='' width={40} src="/images/assets/github.png" alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/thalestrombim/" target="_blank" >
                            <img className='' width={40} src="/images/assets/linkedin.png" alt="linkedin" />
                        </a>
                        <a href="https://www.linkedin.com/in/thalestrombim/" target="_blank" >
                            <img className='' width={40} src="/images/assets/email.png" alt="email" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}