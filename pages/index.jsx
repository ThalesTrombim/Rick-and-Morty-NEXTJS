import { Header } from '../src/components/Header';

export default function Home({list}){
  
  return (
    <div id="Container" className="w-screen h-screen bg-homebg-dark overflow-x-hidden">
      <div className="w-screen h-5/6 bg-cover bg-center" 
       style={{backgroundImage: `url('images/background.jpg')`}}
      >
        <Header />
      </div>
      <div className="w-full">
        <div id="list-container" className="w-10/12 m-auto h-auto md:grid md:gap-8 grid-cols-4 2xl:grid-cols-5 auto-rows-auto pt-5">
          {list.map( item => (
            <a key={item.id} href={`/character/${item.id}`}>
              <div className="w-72 md:w-64 bg-cover bg-center bg-homebg-light rounded-t-xl mt-5 md:mt-0">
                <img className="w-full rounded-t-xl" src={item.image} alt={item.name} />
                <div className="rounded-b-xl">
                  <div className="h-10 mt-2 flex overflow-y-hidden justify-center">
                    <h1 className="font-teste text-4xl text-center">{item.name}</h1>
                  </div>
                  <div className="flex h-18 justify-between py-4 px-2">
                    <div className="flex flex-col w-1/3 items-center justify-center">
                      <img src={`/images/${item.status}.png`} alt="" className="w-10" />
                      {item.status}
                    </div>
                    <div className="flex flex-col w-1/3 items-center justify-center">
                      <img src={`/images/${item.species}.png`} alt="" className="w-10" />
                      {item.species}
                    </div>
                    <div className="flex flex-col w-1/3 items-center justify-center">
                    <img src={`/images/${item.gender}.png`} alt="" className="w-10" />
                      {item.gender}
                    </div>
                  </div>
                </div>
              </div>
            </a>
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