"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const About = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Navbar />

            <div className="flex flex-row h-[calc(100vh-64px)]">
                <SideBar />
                <div className="flex flex-col w-screen cursor-default items-center">
                    <div className="flex flex-row mx-8 mt-8 justify-center">
                        <h1 className="text-7xl font-ptserif text-vibrant font-semibold mx-32 my-auto">Ripiyu</h1>
                        <div className="flex flex-col">
                            <p className="mt-4 text-lg text-gray-700 font-poppins mr-36">
                                <span className="text-vibrant font-semibold">Ripiyu</span> memberikan{" "}
                                <span className="text-vibrant font-semibold">review</span> mengenai mata kuliah umum yang telah dipelajari selama Tahap Persiapan Bersama (TPB) 2023.
                            </p>
                            <p className="mt-2 text-lg text-gray-700 w-2/3 font-poppins mr-36">
                                Tujuannya adalah para mahasiswa TPB ITB dapat mengetahui{" "}
                                <span className="text-vibrant font-semibold">seluk beluk</span> dalam mata kuliah beserta{" "}
                                <span className="text-vibrant font-semibold">do&apos;s</span> and{" "}
                                <span className="text-vibrant font-semibold">don&apos;ts</span> yang dapat diterapkan.
                            </p>
                        </div>
                    </div>
                    <div className="bg-bluey text-center mt-20 h-8 w-5/6">
                        <h3 className="text-white font-poppins my-1">Our Contributors</h3>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Box sx={{ width: "100%", typography: "body1", textAlign: "center" }}>
                            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="UI/UX Designer" />
                                    <Tab label="Product Manager" />
                                    <Tab label="Data Scientist" />
                                    <Tab label="Software Engineer" />
                                    <Tab label="Game Developer" />
                                </Tabs>
                            </Box>

                            {/* UI/UX */}
                            <Box hidden={value !== 0} sx={{ p: 3 }}>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                    <Image src={"/images/Shannon.png"} alt="Shannon Aurellius Anastasya Lie" width={150} height={150} className="mr-10" />
                                    <Box>
                                        <Typography className="font-bold text-3xl text-left font-poppins">
                                            Shannon Aurellius Anastasya Lie
                                        </Typography>
                                        <Typography className="text-left text-lg font-poppins">
                                            19623105 - Teknik Informatika
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Product Manager */}
                            <Box hidden={value !== 1} sx={{ p: 3 }}>
                                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                                    <Slider {...settings}>
                                        <div>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                                <Image src={"/images/wijak.png"} alt="Wijaksara Aptaluhung" width={150} height={150} className="mr-10" />
                                                <Box>
                                                    <Typography className="font-bold text-3xl text-left font-poppins">
                                                        Wijaksara Aptaluhung
                                                    </Typography>
                                                    <Typography className="text-left text-lg font-poppins">
                                                        19623024 - Sistem dan Teknologi Informasi
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </div>
                                        <div>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                                <Image src={"/images/Matthew.png"} alt="Matthew Sebastian Kurniawan" width={150} height={150} className="mr-10" />
                                                <Box>
                                                    <Typography className="font-bold text-3xl text-left font-poppins">
                                                        Matthew Sebastian Kurniawan
                                                    </Typography>
                                                    <Typography className="text-left text-lg font-poppins">
                                                        19623205 - Sistem dan Teknologi Informasi
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </div>
                                    </Slider>
                                </div>
                            </Box>

                            {/* Data Scientist */}
                            <Box hidden={value !== 2} sx={{ p: 3 }}>
                                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                                    <Slider {...settings}>
                                        <div>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                                <Image src={"/images/Kenan.png"} alt="Jonathan Kenan Budianto" width={150} height={150} className="mr-10" />
                                                <Box>
                                                    <Typography className="font-bold text-3xl text-left font-poppins">
                                                        Jonathan Kenan Budianto
                                                    </Typography>
                                                    <Typography className="text-left text-lg font-poppins">
                                                        19623179 - Sistem dan Teknologi Informasi
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </div>
                                        <div>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                                <Image src={"/images/Theresa.png"} alt="Theresia Ivana Marella Siswahyudi" width={150} height={150} className="mr-10" />
                                                <Box>
                                                    <Typography className="font-bold text-3xl text-left font-poppins">
                                                        Theresia Ivana Marella Siswahyudi
                                                    </Typography>
                                                    <Typography className="text-left text-lg font-poppins">
                                                        19623266 - Sistem dan Teknologi Informasi
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </div>
                                        <div>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                                <Image src={"/images/Nazwan.png"} alt="Nazwan Siddqi Muttaqin" width={150} height={150} className="mr-10" />
                                                <Box>
                                                    <Typography className="font-bold text-3xl text-left font-poppins">
                                                        Nazwan Siddqi Muttaqin
                                                    </Typography>
                                                    <Typography className="text-left text-lg font-poppins">
                                                        19623200 - Sistem dan Teknologi Informasi
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </div>
                                    </Slider>
                                </div>
                            </Box>

                            {/* Software Engineer */}
                            <Box hidden={value !== 3} sx={{ p: 3 }}>
                                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                                    <Slider {...settings}>
                                        <div>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                                <Image src={"/images/Ano.png"} alt="Muhammad Naufal Fathan" width={150} height={150} className="mr-10" />
                                                <Box>
                                                    <Typography className="font-bold text-3xl text-left font-poppins">
                                                        Muhammad Naufal Fathan
                                                    </Typography>
                                                    <Typography className="text-left text-lg font-poppins">
                                                        19623088 - Sistem dan Teknologi Informasi
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </div>
                                        <div>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                                <Image src={"/images/Indah.png"} alt="Indah Novita Tangdililing" width={150} height={150} className="mr-10" />
                                                <Box>
                                                    <Typography className="font-bold text-3xl text-left font-poppins">
                                                        Indah Novita Tangdililing
                                                    </Typography>
                                                    <Typography className="text-left text-lg font-poppins">
                                                        19623078 - Teknik Informatika
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </div>
                                        <div>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                                <Image src={"/images/Gerrard.png"} alt="Samuel Gerrard H. Girsang" width={150} height={150} className="mr-10" />
                                                <Box>
                                                    <Typography className="font-bold text-3xl text-left font-poppins">
                                                        Samuel Gerrard H. Girsang
                                                    </Typography>
                                                    <Typography className="text-left text-lg font-poppins">
                                                        19623003 - Teknik Informatika
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </div>
                                        <div>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                                <Image src={"/images/Hazim.png"} alt="Muhammad Hazim Ramadhan Prajoda" width={150} height={150} className="mr-10" />
                                                <Box>
                                                    <Typography className="font-bold text-3xl text-left font-poppins">
                                                        Muhammad Hazim Ramadhan Prajoda
                                                    </Typography>
                                                    <Typography className="text-left text-lg font-poppins">
                                                        19623194 - Sistem dan Teknologi Informasi
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </div>
                                    </Slider>
                                </div>
                            </Box>

                            {/* Game Developer */}
                            <Box hidden={value !== 4} sx={{ p: 3 }}>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                    <Image src={"/images/Rafizan.png"} alt="Rafizan Muhammad S." width={150} height={150} className="mr-10" />
                                    <Box>
                                        <Typography className="font-bold text-3xl text-left font-poppins">
                                            Rafizan Muhammad S.
                                        </Typography>
                                        <Typography className="text-left text-lg font-poppins">
                                            19623102 - Teknik Informatika
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;