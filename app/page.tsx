import Image from "next/image";
import Navbar from "./components/navbar";

const Home = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className="flex flex-row">
                <div className="flex flex-col w-1/4 bg-white items-center border-r-2 border-slate-200 h-lvh">
                    <div className="rounded-lg text-black hover:bg-vibrant hover:text-white w-5/6 p-2 mt-8 mb-3">
                        <h2>Home</h2>
                    </div>
                    <div className="rounded-lg text-black hover:bg-vibrant hover:text-white  w-5/6 p-2 mb-3">
                        <h2>Mini Games</h2>
                    </div>
                    <div className="rounded-lg text-black hover:bg-vibrant hover:text-white  w-5/6 p-2 mb-3">
                        <h2>Leaderboard</h2>
                    </div>
                    <div className="rounded-lg text-black hover:bg-vibrant hover:text-white  w-5/6 p-2 mb-3">
                        <h2>About Us</h2>
                    </div>
                    <div className="rounded-lg text-black hover:bg-vibrant hover:text-white w-5/6 p-2 mb-3">
                        <h2>Settings</h2>
                    </div>
                    <div className="rounded-lg text-white bg-vibrant p-2 mt-3 w-5/6 text-center">
                        <h2>Logout</h2>
                    </div>
                </div>

                <div className="flex flex-col w-screen h-lvh">
                    <div className="bg-cloudblue ml-3 mt-3 mr-3 mb-5 h-1/3 rounded-lg">
                        <h2 className="text-3xl p-3">Selamat datang</h2>
                    </div>
                    <div className="flex flex-row gap-20">
                        <div className="bg-slate-300 text-center rounded-lg ml-3 w-[534px]">
                            <h2>Matematika</h2>
                        </div>
                        <div className="bg-slate-300 text-center rounded-lg ml-3 w-[534px]">
                            <h2>Matematika</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home