import Card from '../src/components/Card';
import { Header } from '../src/components/Header';

export default function Home({list}){
  
  return (
    <div id="Container" className="text-white w-screen h-screen bg-homebg-dark overflow-x-hidden">
      <div className="w-screen h-5/6 bg-cover bg-center" 
       style={{backgroundImage: `url('images/background.png')`}}
      >
        <Header />

    <main className="mt-28 ml-12 w-1/2">
      <h1 className="font-semibold text-5xl mb-5">
        Project made with nextjs
      </h1>
      <p className="text-2xl">
        Developed using the main
        features that NextJS has.
        Here you find all characters
        from the Rick and Morty series and some information
        about them too.
      </p>
    </main>
      </div>
      <div className="w-full">
        <div id="list-container" className="w-11/12 m-auto h-auto md:grid md:gap-8 grid-cols-4 2xl:grid-cols-5 auto-rows-auto pt-5">
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