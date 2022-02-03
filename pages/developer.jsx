export default function Developer() {
    return (
        <div id='container' className='bg-homebg-dark h-screen pt-52'>
            <main className='flex flex-col items-center text-2xl md:text-3xl text-white gap-6 lg:pt-44'>
                <div className='w-60 h-60 md:w-80 md:h-80 bg-white rounded-full bg-cover bg-center' style={{backgroundImage: `url('images/dev.jpg')`}}></div>
                <h3>Thales Trombim</h3>
                <div className='flex gap-10'>
                    <a href="https://github.com/ThalesTrombim" target="_blank" >
                        <img className='w-8 md:w-10 md:h-10' src="/images/icons/github.png" alt="email" />
                    </a>
                    <a href="https://www.linkedin.com/in/thalestrombim/" target="_blank" >
                        <img className='w-8 md:w-10 md:h-10' src="/images/icons/linkedin.png" alt="email" />
                    </a>
                    <a href="https://www.linkedin.com/in/thalestrombim/" target="_blank" >
                        <img className='w-8 md:w-10 md:h-10' src="/images/icons/email.png" alt="email" />
                    </a>
                </div>
            </main>

        </div>
    )
}