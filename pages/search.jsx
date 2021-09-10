export default function Search() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center" style={{backgroundImage: `url('images/bg-search.jpg')`}}>
            <div className="w-2/3 h-3/4">
                <h1 className="text-5xl text-center font-teste">Pesquise por um personagem</h1>
                <div className="bg-white w-1/2 m-auto mt-60">
                    <input className="text-2xl text-center w-full rounded h-14" type="text" />
                </div>
            </div>
            
        </div>
    );
}
