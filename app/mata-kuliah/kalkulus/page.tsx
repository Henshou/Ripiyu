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
                        <h1 className="text-2xl">Home &gt; Kalkulus</h1>
                    </div>
                    <div className="rounded-2xl bg-cloudblue p-4 indent-6 text-justify">
                        <p>Mata kuliah Kalkulus mendapatkan rating 2,9 dari 4, yang menunjukkan bahwa mahasiswa secara umum 
                            merasa puas dengan materi yang diajarkan, meskipun ada ruang untuk perbaikan. Berdasarkan hasil 
                            survei, 54% responden merasa puas dengan materi yang diberikan, dan mayoritas mahasiswa (88%) 
                            mengandalkan video tutorial untuk memahami materi Kalkulus.
                        </p>
                        <p>Dengan mayoritas responden lebih menyukai gaya belajar visual (66,7%) dan reading/writing (51,7%), 
                            Kalkulus tampaknya cocok untuk mahasiswa yang lebih memilih sumber belajar visual seperti slide 
                            kuliah dan video tutorial. Namun, meskipun ratingnya cukup baik, akses terhadap ulasan dan review 
                            dari mahasiswa lain dianggap penting oleh 52% responden, yang menunjukkan bahwa evaluasi lebih 
                            lanjut dan sumber tambahan mungkin diperlukan.
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