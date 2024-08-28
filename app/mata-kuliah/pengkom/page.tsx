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

            <div className="flex flex-row">
                <SideBar></SideBar>
                <div className="flex flex-col px-8 container mx-auto">
                    <div className="mt-6 mb-3">
                        <h1 className="text-2xl">Home &gt; Pengenalan Komputasi</h1>
                    </div>
                    <div className="rounded-2xl bg-cloudblue p-4 indent-6 text-justify">
                        <p>Pengantar Pemrograman atau Pengkom memperoleh rating 2,88 dari 4, yang menempatkannya hampir setara 
                            dengan Kalkulus dalam hal kepuasan mahasiswa. Mahasiswa cenderung mencari sumber belajar tambahan 
                            secara online, dengan 56% responden sangat sering mencari ulasan atau ringkasan tentang mata kuliah 
                            ini. Selain itu, 88% mahasiswa menggunakan video tutorial untuk memahami konsep-konsep pemrograman, 
                            sementara slide kuliah dan diskusi dengan teman juga sering digunakan. 
                        </p>
                        <p>Dengan mayoritas mahasiswa memiliki gaya belajar visual dan reading/writing, materi Pengkom yang 
                            bersifat teknis mungkin lebih mudah dipahami melalui pendekatan visual dan tutorial interaktif. 
                            Meski demikian, akses ke ulasan dan review tetap penting, dengan 52% responden menilai ini sebagai 
                            aspek yang perlu diperhatikan dalam pembelajaran Pengkom.
                        </p>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-2xl">Materi & Silabus</h1>
                    </div>
                    <div className="border-2 rounded-2xl border-black p-2">
                        <p></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MataKuliah;