"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function MinigamesPage() {
    const [quizStarted, setQuizStarted] = useState(false);

    const startQuiz = () => {
        setQuizStarted(true);
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            <div className="flex flex-row">
                {/* Sidebar */}
                <div className="flex flex-col w-1/4 bg-white items-center border-r-2 border-slate-200 h-lvh">
                    {["Home", "Mini Games", "Leaderboard", "About Us", "Settings"].map((item, index) => (
                        <div
                            key={index}
                            className="rounded-lg text-black hover:bg-vibrant hover:text-white w-5/6 p-2 mt-3"
                        >
                            <h2>{item}</h2>
                        </div>
                    ))}
                    <div className="rounded-lg text-white bg-vibrant p-2 mt-3 w-5/6 text-center">
                        <h2>Logout</h2>
                    </div>
                </div>

                {/* Main */}
                <div className="flex-grow flex flex-col h-lvh">
                    {quizStarted ? (
                        <>
                            {/* Quiz Count */}
                            <div className="flex justify-center">
                                <h2 className="mt-3 p-3 w-48 text-3xl text-center font-bold rounded-lg bg-cloudblue text-black">
                                    1/10
                                </h2>
                            </div>

                            {/* Quiz Question */}
                            <div className="flex flex-row justify-center ml-3 mt-3 mr-3 mb-5 h-2/6 rounded-lg bg-cloudblue">
                                <div className="flex flex-col justify-center m-5 p-3 pl-10 pr-10 rounded-lg bg-white">
                                    <Image src="/images/CatQuiz.jpg" alt="cat" width={150} height={150}/>
                                </div>
                                <div className="flex flex-col justify-center m-3">
                                    <h2 className="text-3xl text-center font-bold">
                                        Siapa nama kucing imut ITB ini?
                                    </h2>
                                </div>
                            </div>

                            {/* Quiz Options */}
                            <div className="grid grid-cols-4 gap-3 h-2/6 mx-3">
                                <button className="rounded-lg w-full h-full text-3xl bg-vibrant text-white hover:bg-darkblue">
                                    Aneesa
                                </button>
                                <button className="rounded-lg w-full h-full text-3xl bg-vibrant text-white hover:bg-darkblue">
                                    Kitty
                                </button>
                                <button className="rounded-lg w-full h-full text-3xl bg-vibrant text-white hover:bg-darkblue">
                                    Ava Alison
                                </button>
                                <button className="rounded-lg w-full h-full text-3xl bg-vibrant text-white hover:bg-darkblue">
                                    Madam Eva
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Leaderboards */}
                            <div className="ml-3 mt-3 mr-3 mb-5 h-3/6 rounded-lg bg-cloudblue">
                                <h2 className="text-3xl p-3 text-center font-bold">Leaderboards</h2>
                                <h2 className="text-center font-bold">bla bla bla</h2>
                            </div>

                            {/* Quiz Start */}
                            <div className="m-3 h-1/6 border-2 rounded-lg bg-white">
                                <h2 className="text-2xl p-3 text-center font-bold">
                                    Tes Pengetahuan ITB-mu lewat quiz ini!
                                </h2>
                                <div className="flex justify-center">
                                    <button
                                        onClick={startQuiz}
                                        className="bg-vibrant rounded-lg w-52 h-11 text-white hover:bg-darkblue"
                                    >
                                        Start Quiz
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}