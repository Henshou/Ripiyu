import Navbar from "../components/navbar";

export default function MinigamesPage() {
    return(
        <div>
            <Navbar></Navbar>

            <div>
                <div className="flex flex-col w-screen h-lvh">
                    <div className="bg-cloudblue ml-3 mt-3 mr-3 mb-5 h-3/6 rounded-lg">
                        <h2 className="text-3xl p-3 text-center font-bold">Leaderboards</h2>
                        <h2 className="text-center font-bold">bla bla bla</h2>
                    </div>
                    <div className="bg-cloudblue ml-3 mt-3 mr-3 mb-5 h-1/6 rounded-lg">
                        <h2 className="text-2xl p-3 text-center font-bold">Tes Pengetahuan ITB mu lewat quiz ini!</h2>
                        <div className="flex justify-center">
                            <button className="bg-vibrant rounded-lg w-52 h-11 text-white">Start Quiz</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}