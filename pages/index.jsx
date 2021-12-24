import Card from '../src/components/Card';
import { Header } from '../src/components/Header';

export default function Home({list}){
  
  return (
    <div id="Container" className="text-white w-screen h-screen bg-homebg-dark overflow-x-hidden">
      <div className="w-screen h-5/6 bg-cover md:bg-center bg-right" 
       style={{backgroundImage: `url('images/background.png')`}}
      >
        <Header />

    <main className="w-10/12 md:w-9/12 text-center m-auto mt-8 md:text-left">
      <div className='md:w-1/2 md:mt-48'>
        <h1 className="font-semibold md:text-5xl text-3xl mb-5">
          Project made with nextjs
        </h1>
        <p className="md:text-2xl text-xl">
          Developed using the main
          features that NextJS has.
          Here you find all characters
          from the Rick and Morty series and some information
          about them too.
        </p>
      </div>
    </main>
      </div>
      <div className="w-full flex">
        <div id="list-container" className="m-auto md:grid md:grid-cols-4 md:gap-8 md:mt-8">
          {list.map( item => (
            <Card character={ item }/>
          ))}
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