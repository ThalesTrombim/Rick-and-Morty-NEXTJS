import { Header } from '../src/components/Header';

export default function Search() {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-center" style={{
                    backgroundSize: 'cover',
                    backgroundPosition:'center center', 
                    backgroundImage: `url('images/bg-search.jpg')`
                }}>
            <Header />
                <div className="w-2/5 h-2/5 flex flex-col text-center">
                    <p>Pesquise por um personagem</p>
                    <div className="w-full mx-auto mt-20">
                        <input className="text-2xl border border-gray-500 text-white bg-transparent text-center w-11/12 rounded-full h-10" type="text" />
                    </div>
                </div>
            </div>
        </>
    );
}
