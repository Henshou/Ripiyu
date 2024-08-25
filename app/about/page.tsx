"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
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
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const About = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar></Navbar>

            <div className="flex flex-row h-[calc(100vh-64px)]">
                <SideBar></SideBar>
                <div className="flex flex-col w-screen cursor-default items-center">
                    <div className="flex flex-row mx-8 mt-8 justify-center">
                        <h1 className="text-7xl font-ptserif text-vibrant font-semibold mx-32 my-auto">
                            Ripiyu
                        </h1>
                        <div className="flex flex-col">
                            <p className="mt-4 text-lg text-gray-700 font-poppins mr-36 text-lg">
                                <span className="text-vibrant font-semibold">
                                    Ripiyu
                                </span>{" "}
                                memberikan{" "}
                                <span className="text-vibrant font-semibold">
                                    review
                                </span>{" "}
                                mengenai mata kuliah umum yang telah dipelajari
                                selama Tahap Persiapan Bersama (TPB) 2023.
                            </p>
                            <p className="mt-2 text-lg text-gray-700 w-2/3 font-poppins mr-36 text-lg">
                                Tujuannya adalah para mahasiswa TPB ITB dapat
                                mengetahui{" "}
                                <span className="text-vibrant font-semibold">
                                    seluk beluk
                                </span>
                                dalam mata kuliah beserta{" "}
                                <span className="text-vibrant font-semibold">
                                    do's
                                </span>{" "}
                                and{" "}
                                <span className="text-vibrant font-semibold">
                                    {" "}
                                    don'ts{" "}
                                </span>
                                yang dapat diterapkan.
                            </p>
                        </div>
                    </div>
                    <div className="bg-bluey text-center mt-20 h-8 w-5/6">
                        <h3 className="text-white font-poppins my-1">
                            Our Contributors
                        </h3>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Box
                            sx={{
                                width: "100%",
                                typography: "body1",
                                textAlign: "center",
                            }}
                        >
                            <Box
                                sx={{ borderBottom: 1, borderColor: "divider" }}
                            >
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="basic tabs example"
                                >
                                    <Tab
                                        label="UI/UX Designer"
                                        {...a11yProps(0)}
                                    />
                                    <Tab
                                        label="Product Manager"
                                        {...a11yProps(1)}
                                    />
                                    <Tab
                                        label="Data Scientist"
                                        {...a11yProps(2)}
                                    />
                                    <Tab
                                        label="Software Engineer"
                                        {...a11yProps(3)}
                                    />
                                    <Tab
                                        label="Game Developer"
                                        {...a11yProps(4)}
                                    />
                                </Tabs>
                            </Box>

                            {/* UI/UX */}
                            <CustomTabPanel value={value} index={0}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mt: 2,
                                    }}
                                >
                                    <Image
                                        src={"/images/Shannon.png"}
                                        alt="Shannon Aurellius Anastasya Lie"
                                        width={150}
                                        height={150}
                                        className="mr-10"
                                    />
                                    <Box>
                                        <Typography className="font-bold text-3xl text-left font-poppins">
                                            Shannon Aurellius Anastasya Lie{" "}
                                        </Typography>
                                        <Typography className="text-left text-lg font-poppins">
                                            19623105 - Teknik Informatika
                                        </Typography>
                                    </Box>
                                </Box>
                            </CustomTabPanel>

                            {/* Product Manager */}
                            <CustomTabPanel value={value} index={1}>
                                <div
                                    style={{
                                        maxWidth: "500px",
                                        margin: "0 auto",
                                    }}
                                >
                                    <Carousel
                                        showArrows={true}
                                        infiniteLoop={true}
                                        showThumbs={false}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 2,
                                            }}
                                        >
                                            <Image
                                                src={"/images/wijak.png"}
                                                alt="Wijaksara Aptaluhung"
                                                width={150}
                                                height={150}
                                                className="mr-10"
                                            />
                                            <Box>
                                                <Typography className="font-bold text-3xl text-left font-poppins">
                                                    Wijaksara Aptaluhung{" "}
                                                </Typography>
                                                <Typography className="text-left text-lg font-poppins">
                                                    19623024 - Sistem dan
                                                    Teknologi Informasi
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 2,
                                            }}
                                        >
                                            <Image
                                                src={"/images/Matthew.png"}
                                                alt="Matthew Sebastian Kurniawan"
                                                width={150}
                                                height={150}
                                                className="mr-10"
                                            />
                                            <Box>
                                                <Typography className="font-bold text-3xl text-left font-poppins">
                                                    Matthew Sebastian Kurniawan{" "}
                                                </Typography>
                                                <Typography className="text-left text-lg font-poppins">
                                                    19623205 - Sistem dan
                                                    Teknologi Informasi
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Carousel>
                                </div>
                            </CustomTabPanel>

                            {/* Data Scientist */}
                            <CustomTabPanel value={value} index={2}>
                                <div
                                    style={{
                                        maxWidth: "500px",
                                        margin: "0 auto",
                                    }}
                                >
                                    <Carousel
                                        showArrows={true}
                                        infiniteLoop={true}
                                        showThumbs={false}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 2,
                                            }}
                                        >
                                            <Image
                                                src={"/images/Kenan.png"}
                                                alt="Jonathan Kenan Budianto"
                                                width={150}
                                                height={150}
                                                className="mr-10"
                                            />
                                            <Box>
                                                <Typography className="font-bold text-3xl text-left font-poppins">
                                                    Jonathan Kenan Budianto{" "}
                                                </Typography>
                                                <Typography className="text-left text-lg font-poppins">
                                                    19623179 - Sistem dan
                                                    Teknologi Informasi
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 2,
                                            }}
                                        >
                                            <Image
                                                src={"/images/Theresa.png"}
                                                alt="Theresia Ivana Marella Siswahyudi"
                                                width={150}
                                                height={150}
                                                className="mr-10"
                                            />
                                            <Box>
                                                <Typography className="font-bold text-3xl text-left font-poppins">
                                                    Theresia Ivana Marella Siswahyudi{" "}
                                                </Typography>
                                                <Typography className="text-left text-lg font-poppins">
                                                    19623266 - Sistem dan
                                                    Teknologi Informasi
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 2,
                                            }}
                                        >
                                            <Image
                                                src={"/images/Nazwan.png"}
                                                alt="Nazwan Siddqi Muttaqin"
                                                width={150}
                                                height={150}
                                                className="mr-10"
                                            />
                                            <Box>
                                                <Typography className="font-bold text-3xl text-left font-poppins">
                                                    Nazwan Siddqi Muttaqin{" "}
                                                </Typography>
                                                <Typography className="text-left text-lg font-poppins">
                                                    19623200 - Sistem dan
                                                    Teknologi Informasi
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Carousel>
                                </div>
                            </CustomTabPanel>

                            {/* Software Engineer */}
                            <CustomTabPanel value={value} index={3}>
                                <div
                                    style={{
                                        maxWidth: "500px",
                                        margin: "0 auto",
                                    }}
                                >
                                    <Carousel
                                        showArrows={true}
                                        infiniteLoop={true}
                                        showThumbs={false}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 2,
                                            }}
                                        >
                                            <Image
                                                src={"/images/Ano.png"}
                                                alt="Muhammad Naufal Fathan"
                                                width={150}
                                                height={150}
                                                className="mr-10"
                                            />
                                            <Box>
                                                <Typography className="font-bold text-3xl text-left font-poppins">
                                                    Muhammad Naufal Fathan{" "}
                                                </Typography>
                                                <Typography className="text-left text-lg font-poppins">
                                                    19623088 - Sistem dan
                                                    Teknologi Informasi
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 2,
                                            }}
                                        >
                                            <Image
                                                src={"/images/Indah.png"}
                                                alt="Indah Novita Tangdililing"
                                                width={150}
                                                height={150}
                                                className="mr-10"
                                            />
                                            <Box>
                                                <Typography className="font-bold text-3xl text-left font-poppins">
                                                    Theresia Ivana Marella Siswahyudi{" "}
                                                </Typography>
                                                <Typography className="text-left text-lg font-poppins">
                                                    19623078 - Teknik Informatika
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 2,
                                            }}
                                        >
                                            <Image
                                                src={"/images/Gerrard.png"}
                                                alt="Samuel Gerrard H. Girsang"
                                                width={150}
                                                height={150}
                                                className="mr-10"
                                            />
                                            <Box>
                                                <Typography className="font-bold text-3xl text-left font-poppins">
                                                    Samuel Gerrard H. Girsang{" "}
                                                </Typography>
                                                <Typography className="text-left text-lg font-poppins">
                                                    19623003 - Teknik Informatika
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 2,
                                            }}
                                        >
                                            <Image
                                                src={"/images/Hazim.png"}
                                                alt="Muhammad Hazim Ramadhan Prajoda"
                                                width={150}
                                                height={150}
                                                className="mr-10"
                                            />
                                            <Box>
                                                <Typography className="font-bold text-3xl text-left font-poppins">
                                                    Muhammad Hazim Ramadhan Prajoda{" "}
                                                </Typography>
                                                <Typography className="text-left text-lg font-poppins">
                                                    19623194 - Sistem dan Teknologi Informasi
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Carousel>
                                </div>
                            </CustomTabPanel>

                            {/* Game Developer */}
                            <CustomTabPanel value={value} index={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mt: 2,
                                    }}
                                >
                                    <Image
                                        src={"/images/Rafizan.png"}
                                        alt="Rafizan Muhammad S."
                                        width={150}
                                        height={150}
                                        className="mr-10"
                                    />
                                    <Box>
                                        <Typography className="font-bold text-3xl text-left font-poppins">
                                            Rafizan Muhammad S.{" "}
                                        </Typography>
                                        <Typography className="text-left text-lg font-poppins">
                                            19623102 - Teknik Informatika
                                        </Typography>
                                    </Box>
                                </Box>
                            </CustomTabPanel>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
