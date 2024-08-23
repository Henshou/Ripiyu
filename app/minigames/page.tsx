"use client";

import { useState } from "react";
import Navbar from "../components/navbar";

export default function MinigamesPage() {
    const [quizStarted, setQuizStarted] = useState(false);

    const startQuiz = () => {
        setQuizStarted(true);
    };

    return(
        <div>
            <Navbar />

            <div className="flex flex-row w-screen">
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
                    { quizStarted ? (
                        <>
                            <div className="flex justify-center">
                                <h2 className="text-3xl mt-3 p-3 w-48 text-center font-bold bg-cloudblue text-black rounded-lg">
                                    1/10
                                </h2>
                            </div>
                            <div className="bg-white border-2 ml-3 mt-3 mr-3 mb-5 h-2/6 rounded-lg flex flex-col justify-center">
                                <h2 className="text-3xl text-center font-bold">Kapan ITB didirikan?</h2>
                            </div>
                            <div className="flex flex-row justify-center h-2/6">
                                <button className="bg-vibrant rounded-lg ml-3 w-1/4 h-full text-3xl text-white hover:bg-darkblue">
                                    1920
                                </button>
                                <button className="bg-vibrant rounded-lg ml-3 w-1/4 h-full text-3xl text-white hover:bg-darkblue">
                                    1930
                                </button>
                                <button className="bg-vibrant rounded-lg ml-3 w-1/4 h-full text-3xl text-white hover:bg-darkblue">
                                    1910
                                </button>
                                <button className="bg-vibrant rounded-lg ml-3 w-1/4 h-full text-3xl text-white hover:bg-darkblue">
                                    1940
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="bg-cloudblue ml-3 mt-3 mr-3 mb-5 h-3/6 rounded-lg">
                                <h2 className="text-3xl p-3 text-center font-bold">Leaderboards</h2>
                                <h2 className="text-center font-bold">bla bla bla</h2>
                            </div>
                            <div className="bg-white border-2 ml-3 mt-3 mr-3 mb-5 h-1/6 rounded-lg">
                                <h2 className="text-2xl p-3 text-center font-bold">Tes Pengetahuan ITB-mu lewat quiz ini!</h2>
                                <div className="flex justify-center">
                                    <button onClick={startQuiz} className="bg-vibrant rounded-lg w-52 h-11 text-white hover:bg-darkblue">
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