import Navbar from "../../components/navbar";
import Image from "next/image";
import SideBar from "../../components/sidebar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import * as React from "react";

const MataKuliah = () => {
    return (
        <main>
            <Navbar></Navbar>

            <div className="flex flex-row h-screen">
                <SideBar></SideBar>
                <div className="flex flex-col px-8 container mx-auto">
                    <div className="mt-6 mb-3">
                        <h1 className="text-2xl">Home &gt; Fisika</h1>
                    </div>
                    <div className="rounded-2xl bg-cloudblue p-4 indent-6 text-justify">
                        <p>Fisika mendapatkan rating yang relatif rendah, yaitu 2,1 dari 4, mengindikasikan bahwa banyak 
                            mahasiswa mengalami kesulitan dengan mata kuliah ini. Meski demikian, 54% responden merasa puas 
                            dengan materi yang diberikan. Sebagian besar mahasiswa mencari bantuan dari video tutorial (88%) 
                            dan diskusi dengan teman (62%) untuk memahami konsep-konsep yang sulit dalam Fisika.
                        </p>
                        <p>Dengan gaya belajar visual menjadi yang paling dominan (66,7%), ada kemungkinan bahwa materi Fisika 
                            perlu disajikan dengan lebih interaktif dan visual untuk meningkatkan pemahaman. Sementara itu, 
                            forum diskusi juga dinilai penting oleh 52% responden, yang mungkin menunjukkan kebutuhan akan 
                            lebih banyak interaksi dan diskusi untuk mendalami materi Fisika.
                        </p>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-2xl">Materi & Silabus</h1>
                    </div>
                    <div className="border-2 rounded-2xl border-black p-2 h-72">
                        <p></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MataKuliah;