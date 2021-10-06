import { Header } from '../src/components/Header';

export default function Home({list}){
  
  return (
    <div id="Container" className="text-white w-screen h-screen bg-homebg-dark overflow-x-hidden">
      <div className="w-screen h-5/6 bg-cover bg-center" 
       style={{backgroundImage: `url('images/background.png')`}}
      >
        <Header />
      </div>
      <div className="w-full">
        <div id="list-container" className="w-10/12 m-auto h-auto md:grid md:gap-8 grid-cols-4 2xl:grid-cols-5 auto-rows-auto pt-5">
          {list.map( item => (
            <a key={item.id} href={`/character/${item.id}`}>
              <div className="w-72 md:w-64 bg-cover bg-center bg-card-bg rounded-t-xl mt-5 md:mt-0">
                <div className="rounded-b-xl pt-3">
                  <img className="w-11/12 h-60 m-auto" src={item.image} alt={item.name} />
                  <div className="h-10 mt-2 flex items-center overflow-y-hidden pl-3">
                    <h1 className="font-teste text-2xl">{item.name}</h1>
                  </div>
                  <div className="flex h-14 justify-between py-4 px-2 pl-3">
                    <div className="w-1/2">
                      {item.species}
                    </div>
                    <div className="w-2/5 flex justify-around">
                      <img src={`/images/${item.species}.png`} alt="" />
                      <img src={`/images/${item.status}.png`} alt="" />
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