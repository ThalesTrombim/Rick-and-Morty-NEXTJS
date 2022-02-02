import Card from '../src/components/Card';

export default function Home({ list }){
  return (
    <div id="Container" className="text-white w-full h-auto bg-homebg-dark flex flex-col">
      <div className="w-full h-half bg-cover md:bg-center bg-right "
       style={{backgroundImage: `url('images/background.png')`}}
      >
        <main className="w-10/12 md:w-full text-center mt-10 pb-10 md:text-left md:mx-auto md:mt-40">
          <div className='md:w-1/2 md:mt-28 md:ml-8'>
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
        <div id="list-container" className="md:w-2/3 lg:w-11/12 md:mx-auto  m-md:grid md:grid-cols-3 xl:grid-cols-5 md:gap-5 flex flex-col gap-10 sm:grid sm:grid-cols-2">
          {list.map( item => (
            <Card character={ item }/>
          ))}
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