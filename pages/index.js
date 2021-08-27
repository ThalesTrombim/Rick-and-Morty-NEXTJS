import { Header } from '../src/components/Header';

export default function Home({list}){
  
  return (
    <div id="Container" className="w-screen h-screen bg-homebg-dark overflow-x-hidden">
      <div className="w-screen h-5/6 bg-cover bg-center" 
      style={{backgroundImage: `url('images/bg-next.png')`}}>
        <Header />
      </div>
      <div className="w-full">
        <div id="list-container" className="w-11/12 m-auto h-auto flex flex-wrap justify-around">
          {list.map( item => (
            <a key={item.id} href={`/character/${item.id}`}>
              <div className="w-80 h-400 hbg-cover mb-24 bg-center">
                <img className="w-full h-3/4 rounded-t-xl" src={item.image} alt={item.name} />
                <div className="bg-homebg-light rounded-b-xl">
                  <div className="h-10 flex overflow-y-hidden justify-center">
                    <h1 className="font-teste text-4xl text-center">{item.name}</h1>
                  </div>
                  <div className="flex h-18 justify-between">
                    <div>1</div>
                    <div>2 <br /> <br /></div>
                    <div>3</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
          
          {/* {list.map(item => (
            <a key={item.id} href={`/character/${item.id}`}>
              <div className="w-80 h-xx mb-24 -mt-10 shadow-lg rounded-t-2xl cursor-pointer bg-blue-500 rounded-b-2xl">
                <div id="top-card" className="h-3/4 w-full shadow-lg">
                  <img src={item.image} alt="Character Image" className="w-full filter blur-sm h-full shadow-2xl rounded-t-2xl" />
                </div>
                <div className="h-9 flex  justify-center items-center " >
                  <h3>{item.name}</h3> 
                </div>
                <div className="w-full h-20 flex">
                  <div className=" flex flex-col items-center justify-center w-1/2 rounded-bl-2xl">
                    <img src={`/images/${item.status}.png`} alt="" className="w-10" />
                    {item.status}
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/2 rounded-br-2xl">
                    <img src={`/images/${item.species}.png`} alt="" className="w-10" />
                    {item.species}
                  </div>
                </div>
              </div>
            </a>
          ))}  */}
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
