import Head from 'next/head';
import Card from '../src/components/Card';
import { NextHead } from '../src/components/Head';

export default function Home({ list }){
  return (
    <div id="Container" className="
      text-white 
      bg-gradient-to-r
      from-main-background-left 
      to-main-background-right 
      lg:flex
      lg:flex-col
      lg:w-full
      lg:h-auto
    ">
      <NextHead>
        Home
      </NextHead>
      <div className=""
      //  style={{backgroundImage: `url('images/background.png')`}}
      >
        <main className="
          pt-16
          lg:pt-0
          lg:mt-28
          lg:flex
          lg:items-center
          lg:gap-3
          lg:px-3
          xl:w-2/3
          xl:m-auto
        ">
          <div className='flex text-center flex-col gap-6 py-6 lg:text-left lg:flex lg:flex-col lg:gap-3 xl:gap-6'>
            <h1 className="text-6xl">
              Rick and NextJs
            </h1>
            <p className="lg:text-3xl lg:font-light">
              Developed using the main
              features that NextJS has.
              Here you find all characters
              from the Rick and Morty series and some information
              about them too.
            </p>
            <div className='flex justify-around lg:flex lg:w-2/3 lg:justify-between xl:w-1/2'>
              <button className='
                w-32
                h-12
                rounded-xl
                border-gray-400
                lg:border-2
                lg:h-14
                lg:flex
                lg:items-center
                lg:justify-center
                bg-blue-button-primary
                hover:bg-transparent
              '>
                <a href="/login">
                  login
                </a>
              </button>
              <button className='
                border-gray-400
                w-32
                h-12
                border-2
                rounded-xl
                lg:h-14
                lg:flex
                lg:items-center
                lg:justify-center
                bg-transparent
                hover:bg-blue-button-primary
              '>
                <a href="/search">
                  search
                </a>
              </button>
            </div>
          </div>
          <div className='hidden lg:flex xl:-mr-60'>
            <img src="/images/backgrounds/rick-and-morty-portal.png" alt="" />
          </div>
        </main>
      </div>
      <div 
        className='
          lg:bg-no-repeat
          lg:bg-cover
        '
        style={{backgroundImage: `url('images/backgrounds/main-bg.png')`}}
      >
        <div id="list-container" className="
          lg:mt-12
          lg:grid
          lg:grid-cols-3
          lg:gap-6
          lg:px-6
          xl:grid-cols-5
          xl:w-2/3
          lg:m-auto
          " 
        >
          {list.map( item => (
            <Card character={ item }/>
          ))}
        </div>
        <div className='lg:mt-24 lg:mb-3 xl:w-full xl:mb-6 xl:font-semibold xl:text-2xl'>
          <a href="https://github.com/ThalesTrombim" target="_blank" className='flex justify-center gap-3'>
            <img width={25} src="/images/assets/github.png" alt="" />
            Thales Trombim
          </a>
        </div>

      </div>

    </div>
  );
}

export async function getServerSideProps() {
const res = await fetch('https://rick-and-morty-nextjs-pearl.vercel.app/api/getAll')
const json = await res.json();
  
  return {
    props: {
      list: json.list
    }
  };
}