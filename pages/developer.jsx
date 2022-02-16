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
            '>
            <main className='text-white flex flex-col lg:flex-row items-center gap-12'>
                <div className='w-72 h-72 bg-cover rounded-full' style={{backgroundImage: `url('images/dev.jpg')`}}></div>
                <div className='lg:flex lg:flex-col lg:gap-3'>
                    <h3 className='text-6xl font-semibold'>Thales</h3>
                    <h3 className='text-6xl font-semibold'>Trombim</h3>

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

        </div>
    )
}