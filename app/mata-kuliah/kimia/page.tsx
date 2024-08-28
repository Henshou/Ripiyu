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
                        <h1 className="text-2xl">Home &gt; Kimia</h1>
                    </div>
                    <div className="rounded-2xl bg-cloudblue p-4">
                        <p>Kimia mendapatkan rating 2,12 dari 4, sedikit lebih tinggi dari Fisika, namun tetap berada di kisaran 
                            yang menunjukkan adanya tantangan bagi mahasiswa. Sebagian besar mahasiswa menggunakan video tutorial 
                            (88%) dan slide kuliah (76%) sebagai sumber utama untuk belajar, sementara gaya belajar visual dan 
                            reading/writing mendominasi. 
                        </p>
                        <p>Meskipun ratingnya tidak terlalu tinggi, 54% responden masih merasa puas dengan materi yang diberikan. 
                            Namun, dengan 52% responden menilai pentingnya ulasan dari mahasiswa lain, ada indikasi bahwa mahasiswa 
                            membutuhkan lebih banyak sumber belajar tambahan atau feedback dari rekan-rekan mereka untuk mengatasi 
                            kesulitan dalam mata kuliah Kimia.
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