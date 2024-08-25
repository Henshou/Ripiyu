import Image from "next/image";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";

const About = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className="flex flex-row h-[calc(100vh-64px)]">
                <SideBar></SideBar>
            </div>
        </>
    )
}

export default About