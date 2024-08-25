import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
    return (
        <>
            <div className="flex flex-col w-1/5 bg-white items-center  bg-bluey">
                    <Link href='/' className="flex flex-row items-center rounded-lg text-black hover:bg-vibrant hover:text-white w-5/6 p-2 mt-8 mb-3 bg-white">
                        <HomeIcon className="mr-0.5" ></HomeIcon>
                        <h2 className="text-xl">Home</h2>
                    </Link>
                    <Link href='/' className="flex flex-row items-center rounded-lg text-black hover:bg-vibrant hover:text-white w-5/6 p-2 mb-3 bg-white">
                        <VideogameAssetOutlinedIcon className="mr-0.5" ></VideogameAssetOutlinedIcon>
                        <h2 className="text-xl">Mini Games</h2>
                    </Link>
                    <Link href='/about' className="flex flex-row items-center rounded-lg text-black hover:bg-vibrant hover:text-white w-5/6 p-2 mb-3 bg-white">
                        <InfoOutlinedIcon className="mr-0.5" ></InfoOutlinedIcon>
                        <h2 className="text-xl">About Us</h2>
                    </Link>
                    <Link href='/' className="flex flex-row items-center rounded-lg text-black hover:bg-vibrant hover:text-white w-5/6 p-2 mb-3 bg-white">
                        <SettingsOutlinedIcon className="mr-0.5" ></SettingsOutlinedIcon>
                        <h2 className="text-xl">Settings</h2>
                    </Link>
                    <Link href='/' className="mt-auto mb-12 rounded-lg text-white bg-vibrant p-2 mt-3 w-5/6 text-center">
                        <h2>Logout</h2>
                    </Link>
                </div>
        </>
    )
}

export default SideBar