'use client';
import Image from "next/image";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import * as React from 'react';
import { useEffect, useState } from "react";


const About = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
    const [currentPage, setCurrentPage] = useState(0);
    const [slideDirection, setSlideDirection] = useState<
        "right" | "left" | undefined
    >("left");

    const handleNextPage = () => {
        setSlideDirection("left");
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setSlideDirection("right");
        setCurrentPage((prevPage) => prevPage - 1);
    };
    return (
        <>
            <Navbar></Navbar>

            <div className="flex flex-row h-[calc(100vh-64px)]">
                <SideBar></SideBar>
                <div className="flex flex-col w-screen cursor-default items-center">
                    <div className="flex flex-row mx-8 mt-8 justify-center">
                        <h1 className="text-7xl font-ptserif text-vibrant font-semibold mx-32 my-auto">Ripiyu</h1>
                        <div className="flex flex-col">
                            <p className="mt-4 text-lg text-gray-700 font-poppins mr-36 text-lg">
                                <span className="text-vibrant font-semibold">Ripiyu</span> memberikan <span className="text-vibrant font-semibold">review</span> mengenai mata kuliah umum yang telah dipelajari
                                selama Tahap Persiapan Bersama (TPB) 2023.
                            </p>
                            <p className="mt-2 text-lg text-gray-700 w-2/3 font-poppins mr-36 text-lg">
                                Tujuannya adalah para mahasiswa TPB ITB dapat mengetahui <span className="text-vibrant font-semibold">seluk beluk</span>
                                dalam mata kuliah beserta <span className="text-vibrant font-semibold">do’s</span> and <span className="text-vibrant font-semibold"> don’ts </span>
                                yang dapat diterapkan.
                            </p>
                        </div>
                    </div>
                    <div className="bg-bluey text-center mt-20 h-8 w-5/6">
                        <h3 className="text-white font-poppins my-1">Our Contributors</h3>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Box sx={{ width: '100%', typography: 'body1', textAlign: 'center' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="UI/UX Designer" value="1" />
                                        <Tab label="Product Manager" value="2" />
                                        <Tab label="Data Scientist" value="3" />
                                        <Tab label="Software Engineer" value="4" />
                                        <Tab label="Game Developer" value="5" />
                                    </TabList>
                                </Box>

                                {/* UI/UX */}
                                <TabPanel value="1">
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                                        <Image
                                            src={'/images/Shannon.png'}
                                            alt="Shannon Aurellius Anastasya Lie"
                                            width={150}
                                            height={150}
                                            className="mr-10"
                                        />
                                        <Box>
                                            <Typography className="font-bold text-3xl text-left font-poppins">Shannon Aurellius Anastasya Lie </Typography>
                                            <Typography className="text-left text-lg font-poppins">19623105 - Teknik Informatika</Typography>
                                        </Box>
                                    </Box>
                                </TabPanel>

                                {/* Product Manager */}
                                <TabPanel value="2" className="flex flex-row">
                                    <IconButton
                                        onClick={handlePrevPage}
                                        sx={{ margin: 5 }}
                                        disabled={currentPage === 0}
                                    >
                                        {/* this is the button that will go to the previous page you can change these icons to whatever you wish*/}
                                        <NavigateBeforeIcon />
                                    </IconButton>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                                        <Image
                                            src={'/images/wijak.png'}
                                            alt="Wijaksara Aptaluhung"
                                            width={150}
                                            height={150}
                                            className="mr-10"
                                        />
                                        <Box>
                                            <Typography className="font-bold text-3xl text-left font-poppins">Wijaksara Aptaluhung </Typography>
                                            <Typography className="text-left text-lg font-poppins">19623024 - Sistem dan Teknologi Informasi</Typography>
                                        </Box>
                                    </Box>
                                </TabPanel>

                                {/* Data Scientist */}
                                <TabPanel value="3">
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                                        <Image
                                            src={'/images/Kenan.png'}
                                            alt="Jonathan Kenan Budianto"
                                            width={150}
                                            height={150}
                                            className="mr-10"
                                        />
                                        <Box>
                                            <Typography className="font-bold text-3xl text-left font-poppins">Jonathan Kenan Budianto </Typography>
                                            <Typography className="text-left text-lg font-poppins">19623179 - Sistem dan Teknologi Informasi</Typography>
                                        </Box>
                                    </Box>
                                </TabPanel>

                                {/* Software Engineer */}
                                <TabPanel value="4">
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                                        <Image
                                            src={'/images/Ano.png'}
                                            alt="Muhammad Naufal Fathan"
                                            width={150}
                                            height={150}
                                            className="mr-10"
                                        />
                                        <Box>
                                            <Typography className="font-bold text-3xl text-left font-poppins">Muhammad Naufal Fathan </Typography>
                                            <Typography className="text-left text-lg font-poppins">19623088 - Teknik Informatika</Typography>
                                        </Box>
                                    </Box>
                                </TabPanel>

                                {/* Game Developer */}
                                <TabPanel value="5">
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                                        <Image
                                            src={'/images/Rafizan.png'}
                                            alt="Rafizan Muhammad S."
                                            width={150}
                                            height={150}
                                            className="mr-10"
                                        />
                                        <Box>
                                            <Typography className="font-bold text-3xl text-left font-poppins">Rafizan Muhammad S. </Typography>
                                            <Typography className="text-left text-lg font-poppins">19623102 - Teknik Informatika</Typography>
                                        </Box>
                                    </Box>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About