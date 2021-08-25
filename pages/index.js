import { Header } from '../src/components/Header';

export default function Home({list}){
  var teste = "teste";
  
  
  return (
    <div id="Container" className="w-screen h-screen bg-purple overflow-x-hidden">
      <div className="w-full h-4/5 bg-cover bg-center" style={{backgroundImage: `url('images/bg-next.png')`}}><Header /></div>
      <div className="w-full bg-purple">
        <div id="list-container" className="w-11/12 m-auto h-auto flex flex-wrap justify-around">
          {list.map(item => (
            <a key={item.id} href={`/character/${item.id}`}>
              <div className="w-80 h-xx mb-24 -mt-10 shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <div id="top-card" className="h-3/4 w-full rounded-tr-2xl shadow-lg">
                  <img src={item.image} alt="Character Image" className="w-full h-full rounded-tr-2xl" />
                </div>
                <div className="bg-white h-9 flex  justify-center items-center " >
                  <h3>{item.name}</h3> 
                  <h3></h3> 
                </div>
                <div className="w-full h-20 flex">
                  <div className="bg-blue-500 flex flex-col items-center justify-center w-1/2 rounded-bl-2xl">
                    <img src={`/images/${item.status}.png`} alt="" className="w-10" />
                    Status: {item.status}
                  </div>
                  <div className="bg-pink-300 flex flex-col items-center justify-center w-1/2 rounded-br-2xl">
                    <img src={`/images/${item.species}.png`} alt="" className="w-10" />
                    {item.species}
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
const res = await fetch('http://localhost:3000/api/getAll')
const json = await res.json();
  
  return {
    props: {
      list: json.list
    }
  };
}
