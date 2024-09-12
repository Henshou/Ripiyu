"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import SideBar from "../components/sidebar";

interface Question {
    question: string;
    image: string;
    imagesize: number,
    options: string[];
    correctAnswerIndex: number;
}

const questions: Question[] = [
    {
        question: 'Siapa nama kucing imut ITB ini?',
        image: '/images/CatQuiz.jpg',
        imagesize: 150,
        options: ['Aneesa', 'Kitty', 'Ava Alison', 'Madam Eva'],
        correctAnswerIndex: 3,
    },
    {
        question: 'Kapan ITB didirikan?',
        image: '',
        imagesize: 0,
        options: ['1920', '1930', '1910', '1940'],
        correctAnswerIndex: 0,
    },
    {
        question: 'Apa nama dari kampus ITB pada saat penjajahan Belanda?',
        image: '',
        imagesize: 0,
        options: ['de Techniche Voortgezet te Bandung', 'de Techniche Hoogeschool te Bandung', 'de Techniche Koelenschool te Bandung', 'de Techniche Voortgezet te Indies'],
        correctAnswerIndex: 1,
    },
    {
        question: 'Berikut ini merupakan Multikampus ITB, kecuali ...',
        image: '',
        imagesize: 0,
        options: ['Semarang', 'Jakarta', 'Cirebon', 'Jatinangor'],
        correctAnswerIndex: 0,
    },
    {
        question: 'Siapa nama rektor pertama ITB?',
        image: '',
        imagesize: 0,
        options: ['Prof. Ir. Hendrik Christiaan Paulus de Vos', 'Prof. Dr. Jacob Clay', 'Prof.  Ir. Jan Klopper', 'Prof. Ir. Paulus Pieter Bijlaard'],
        correctAnswerIndex: 2,
    },
    {
        question: 'Nama ITB saat pendudukan Jepang',
        image: '',
        imagesize: 0,
        options: ['Bandung Tekunoroji Daigaku', 'Bandung Kogyo Daigaku', 'Bandung Gijutsu Daigaku', 'Bandung Utsukushii Daigaku'],
        correctAnswerIndex: 1,
    },
    {
        question: 'Tahun berapa Ir. Soekarno lulus dari ITB?',
        image: '',
        imagesize: 0,
        options: ['1924', '1925', '1926', '1927'],
        correctAnswerIndex: 2,
    },
    {
        question: 'Jurusan yang diambil Ir. Soekarno?',
        image: '',
        imagesize: 0,
        options: ['Teknik Sipil', 'Teknik Mesin', 'Teknik Industri', 'Teknik Geologi'],
        correctAnswerIndex: 0,
    },
    {
        question: 'Kapan pemerintah Indonesia meresmikan berdirinya ITB?',
        image: '',
        imagesize: 0,
        options: ['21 Juni 1946', '3 Juli 1920', '26 Desember 2000', '2 Maret 1959'],
        correctAnswerIndex: 3,
    },
    {
        question: 'Apa nama bunga pada gambar yang mekar di bulan Juli-September seolah-olah menyambut mahasiswa baru?',
        image: '/images/BungaQuiz.jpg',
        imagesize: 400,
        options: ['Kembang Sepatu', 'Bougenville', 'Kembang Kolecer', 'Rain Lily'],
        correctAnswerIndex: 2,
    },
    {
        question: 'Kapan mahasiswa ITB memenangi Rural Innovation Award?',
        image: '',
        imagesize: 0,
        options: ['1 Juni 2008', '2 Juni 2008', '1 Juli 2008', '2 Juli 2008'],
        correctAnswerIndex: 2,
    },
    {
        question: 'Total program studi sarjana ITB ada',
        image: '',
        imagesize: 0,
        options: ['50', '51', '52', '53'],
        correctAnswerIndex: 0,
    },
    {
        question: 'Mana yang merupakan koordinat letak ITB Jatinangor?',
        image: '',
        imagesize: 0,
        options: ['6°53′27.25″LS 107°36′37.36″BT', '6°55′41.124″LS 107°46′13.62″BT', '6°53′29.27″LS 107°38′37.39″BT', '6°55′43.125″LS 107°48′13.64″BT'],
        correctAnswerIndex: 1,
    },
    {
        question: 'Luas ITB Ganesha',
        image: '',
        imagesize: 0,
        options: ['47 hektar', '30 hektar', '28 hektar', '19 hektar'],
        correctAnswerIndex: 2,
    },
    {
        question: 'Nama Menteri Pendidikan dan Kebudayaan Indonesia yang pernah menjadi rektor ITB?',
        image: '',
        imagesize: 0,
        options: ['Prof. Dr. Muhadjir Effendy, M.A.P.', 'Prof. Dr. Pratikno, M..Soc.Sc', 'Dr. Ir. Kusmayanto Kadiman', 'Prof. Ir. Wiranto Arismundar, MSME'],
        correctAnswerIndex: 3,
    },
];

export default function MinigamesPage() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [scores, setScores] = useState(-1);

    const currentQuestion = questions[currentQuestionIndex];

    const startQuiz = () => {
        setQuizStarted(true);
        setCurrentQuestionIndex(0);
        setSelectedAnswerIndex(null);
        setShowCorrectAnswer(false);
        setScores(0);
    }

    const endQuiz = () => {
        setQuizStarted(false);
    }

    {/* Timer Handling */}
    useEffect(() => {
        if (selectedAnswerIndex !== null && showCorrectAnswer) {
            const timer = setTimeout(() => {
                if (currentQuestionIndex === 14) {
                    endQuiz();
                }
                else {
                    setShowCorrectAnswer(false);
                    setSelectedAnswerIndex(null);
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                }
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showCorrectAnswer, currentQuestionIndex, selectedAnswerIndex]);

    {/* When Player clicks */}
    const handleAnswerClick = (index: number) => {
        if (!showCorrectAnswer) {
            setSelectedAnswerIndex(index);
            setShowCorrectAnswer(true);

            if (index === currentQuestion.correctAnswerIndex) {
                setScores(scores + 1);
            }
        }
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            <div className="flex flex-row h-[calc(100vh-64px)]">
                <SideBar></SideBar>

                {/* Main */}
                <div className="flex flex-col w-screen">
                    {quizStarted ? (
                        <>
                            {/* Quiz Count */}
                            <div className="flex justify-center">
                                <h2 className="mt-3 p-3 w-48 text-3xl text-center font-bold rounded-lg bg-cloudblue text-black">
                                    {currentQuestionIndex + 1}/15
                                </h2>
                            </div>

                            {/* Quiz Question */}
                            <div className="flex flex-row justify-center ml-3 mt-3 mr-3 mb-5 h-2/6 rounded-lg bg-cloudblue">
                                {
                                    currentQuestion.image !== ''?
                                    (
                                        <div className="flex flex-col justify-center m-5 p-3 pl-10 pr-10 rounded-lg bg-white">
                                            <Image src={currentQuestion.image} alt="cat" width={currentQuestion.imagesize} height={currentQuestion.imagesize}/>
                                        </div>
                                    )
                                    : <></>
                                }
                                <div className="flex flex-col justify-center m-3">
                                    <h2 className="text-3xl text-center font-bold">
                                        {currentQuestion.question}
                                    </h2>
                                </div>
                            </div>

                            {/* Quiz Options */}
                            <div className="grid grid-cols-4 gap-3 h-2/6 mx-3">
                                 {currentQuestion.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerClick(index)}
                                        className={`rounded-lg w-full h-full text-3xl text-white ${
                                            showCorrectAnswer?
                                                index === currentQuestion.correctAnswerIndex? 
                                                    'bg-green'
                                                : index === selectedAnswerIndex? 
                                                    'bg-red'
                                                : 'invisible'
                                            : 'bg-vibrant hover:bg-darkblue'
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Quiz Scores */}
                            {
                                scores >= 0 ?
                                (
                                    <div className="flex flex-col m-3 h-20 rounded-lg justify-center bg-cloudblue">
                                        <h2 className="text-3xl text-center font-bold">You Scored {scores} out of 15!!!</h2>
                                    </div>
                                )
                                : <></>
                            }

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