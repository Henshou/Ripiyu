'use client';
import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";
import SideBar from "./components/sidebar";
import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Home = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        const updateTimeAndDate = () => {
            const now = new Date();
            const optionsDate = { year: 'numeric', month: 'long', day: 'numeric', locale: 'id-ID' };
            setCurrentTime(now.toLocaleTimeString());
            const optionsDay = { weekday: 'long', locale: 'id-ID' };

            setCurrentDate(now.toLocaleDateString('id-ID', optionsDate));
            setCurrentDay(now.toLocaleDateString('id-ID', optionsDay));

            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
        };

        updateTimeAndDate();
        const intervalId = setInterval(updateTimeAndDate, 60000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <Navbar></Navbar>

            <div className="flex flex-row h-[calc(100vh-64px)]">
                <SideBar></SideBar>
                <div className="flex flex-col w-screen">
                    <div className="relative p-4 shadow-lg rounded-lg  overflow-hidden m-7 h-1/4">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/discuss.png)', opacity: 0.5 }}></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blueish/70 to-blueish/21"></div>
                        <div className="relative z-10 cursor-default">
                            <h1 className="text-7xl text-white">{currentTime}</h1>
                            <p className="text-lg text-white">{currentDay}, {currentDate}</p>
                        </div>
                    </div>
                    <div className="m-5">
                        <h2 className="text-xl font-semibold text-gray-800 cursor-default">Mata Kuliah TPB</h2>
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
                                    <Rating className="text-vibrant" defaultValue={2.9} precision={0.1} max={4} readOnly />
                                    </div>
                                    <p className="text-vibrant mt-2">Lihat Detil</p>
                                </div>
                            </Link>
                            {/* Course Card 2 */}
                            <Link href="/">
                                <div className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image src="/images/fisika.jpeg" alt="Fisika" width={150} height={150} className="w-32 h-32 object-cover rounded-lg" />
                                    </div>
                                    <h3 className="font-bold mt-2">Fisika</h3>
                                    <p>2.1/4 dari 50 responden</p>
                                    <div className="flex justify-center mt-2">
                                        <Rating className="text-vibrant" defaultValue={2.14} precision={0.1} max={4} readOnly />
                                    </div>
                                    <p className="text-vibrant mt-2">Lihat Detil</p>
                                </div>
                            </Link>
                            {/* Course Card 3 */}
                            <Link href="/">
                                <div className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image src="/images/kimia.jpeg" alt="Kimia" width={150} height={150} className="w-32 h-32 object-cover rounded-lg" />
                                    </div>
                                    <h3 className="font-bold mt-2">Kimia</h3>
                                    <p>2,12/4 dari 50 responden</p>
                                    <div className="flex justify-center mt-2">
                                    <Rating className="text-vibrant" defaultValue={2.12} precision={0.1} max={4} readOnly />
                                    </div>
                                    <p className="text-vibrant mt-2">Lihat Detil</p>
                                </div>
                            </Link>
                            {/* Course Card 4 */}
                            <Link href="/">
                                <div className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image src="/images/komputasi.jpeg" alt="Matematika" width={150} height={150} className="w-32 h-32 object-cover rounded-lg" />
                                    </div>
                                    <h3 className="font-bold mt-2">Pengenalan Komputasi</h3>
                                    <p>2,88/4 dari 50 responden</p>
                                    <div className="flex justify-center mt-2">
                                    <Rating className="text-vibrant" defaultValue={2.88} precision={0.1} max={4} readOnly />
                                    </div>
                                    <p className="text-vibrant mt-2">Lihat Detil</p>
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