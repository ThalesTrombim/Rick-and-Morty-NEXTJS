import Head from 'next/head';
import Card from '../src/components/Card';
import { NextHead } from '../src/components/Head';

export default function Home({ list }) {
  return (
    <div id="Container"
      className="   
        flex  
        flex-col
        justify-center
        content-center
        container
        mx-auto
        px-2

    ">
      <NextHead>
        Home
      </NextHead>
      <div className=""
      >
        <main className="
          mt-20
          content-between
          justify-between
          flex
          items-center
          py-8
        ">
          <div className='flex text-center flex-col lg:text-left'>
            <h1 className="text-6xl font-bold">
              Rick and NextJs
            </h1>
            <p className="text-1xl lg:font-light max-w-md py-4">
              Developed using the main
              features that NextJS has.
              Here you find all characters
              from the Rick and Morty series and some information
              about them too.
            </p>
            <div className='flex sm:items-center justify-around lg:flex lg:w-2/3 lg:justify-between xl:w-1/2 py-4'>
              <input className='border-gray-600-200 border-2 h-10 p-4 w-full rounded-lg ' type="text" placeholder="Find a character" />
            </div>
          </div>
          <div className=' lg:flex w-1/2'>
            <img src="/images/backgrounds/rick-and-morty-portal.png" alt="" />
          </div>
        </main>
      </div>
      <div
        className='
          lg:bg-no-repeat
          lg:bg-cover
        '
        style={{ backgroundImage: `url('images/backgrounds/main-bg.png')` }}
      >
        <div id="list-container"
          className="
          grid
          p-6
          gap-6
          sm:grid
          sm:p-0
          sm:grid-cols-2
          sm:gap-6
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
          {list.map(item => (
            <Card key={item.id} character={item} />
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

export async function getStaticProps() {
  const res = await fetch('https://rick-and-morty-nextjs-pearl.vercel.app/api/getAll')
  const json = await res.json();

  return {
    props: {
      list: json.list
    },
    revalidate: 60 * 60 * 24 * 30
  };
} ''