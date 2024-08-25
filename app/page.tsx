import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";
import SideBar from "./components/sidebar";

const Home = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className="flex flex-row h-[calc(100vh-64px)]">
                <SideBar></SideBar>
                <div className="flex flex-col w-screen">
                    <div className="relative p-4 shadow-lg rounded-lg overflow-hidden m-7 h-1/4">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/discuss.png)', opacity: 0.5 }}></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blueish/70 to-blueish/21"></div>
                        <div className="relative z-10">
                            <h1 className="text-5xl font-bold text-white">Waktu</h1>
                            <p className="text-lg text-white">Tanggal</p>
                        </div>
                    </div>
                    <div className="m-5">
                        <h2 className="text-xl font-semibold text-gray-800">Mata Kuliah TPB</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            {/* Course Card 1 */}
                            <Link href="/">
                                <div className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image src="/images/matematika.jpeg" alt="Matematika" width={150} height={150} className="w-32 h-32 object-cover rounded-lg" />
                                    </div>
                                    <h3 className="font-bold mt-2">Matematika</h3>
                                    <p>2,9/4 dari 50 responden</p>
                                    <div className="flex justify-center mt-2">
                                        <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
                                    </div>
                                    <p className="text-blue-500 mt-2">Lihat Detil</p>
                                </div>
                            </Link>
                            {/* Course Card 2 */}
                            <Link href="/">
                                <div className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image src="/images/fisika.jpeg" alt="Fisika" width={150} height={150} className="w-32 h-32 object-cover rounded-lg" />
                                    </div>
                                    <h3 className="font-bold mt-2">Fisika</h3>
                                    <p>2/4 dari 50 responden</p>
                                    <div className="flex justify-center mt-2">
                                        <span className="text-yellow-500">★ ★ ★ ☆ ☆</span>
                                    </div>
                                    <p className="text-blue-500 mt-2">Lihat Detil</p>
                                </div>
                            </Link>
                            {/* Course Card 3 */}
                            <Link href="/">
                                <div className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image src="/images/kimia.jpeg" alt="Kimia" width={150} height={150} className="w-32 h-32 object-cover rounded-lg" />
                                    </div>
                                    <h3 className="font-bold mt-2">Kimia</h3>
                                    <p>2,1/4 dari 50 responden</p>
                                    <div className="flex justify-center mt-2">
                                        <span className="text-yellow-500">★ ★ ★ ☆ ☆</span>
                                    </div>
                                    <p className="text-blue-500 mt-2">Lihat Detil</p>
                                </div>
                            </Link>
                            {/* Course Card 4 */}
                            <Link href="/">
                                <div className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image src="/images/komputasi.jpeg" alt="Matematika" width={150} height={150} className="w-32 h-32 object-cover rounded-lg" />
                                    </div>
                                    <h3 className="font-bold mt-2">Pengenalan Komputasi</h3>
                                    <p>2,8/4 dari 50 responden</p>
                                    <div className="flex justify-center mt-2">
                                        <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
                                    </div>
                                    <p className="text-blue-500 mt-2">Lihat Detil</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home