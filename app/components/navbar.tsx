import Image from "next/image";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="top-0 left-0 bg-vibrant w-full">
                    <div className="mx-auto px-4 sm:px-3 lg:px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex shrink-0">
                                    <a href="/" className="p-2 text-center text-4xl font-bold text-white font-ptserif">Ripiyu</a>
                                </div>
                            </div>
                            <div className="md-block">
                                <div className="ml-4 flex items-center space-x-4">
                                    <a href="/" className="p-2"><NotificationsNoneOutlinedIcon className="text-white" fontSize="large"></NotificationsNoneOutlinedIcon></a>
                                    <div className="flex flex-row items-center">
                                        <AccountCircleIcon className="text-white" fontSize="large"></AccountCircleIcon>
                                    <a href="/" className="text-white p-2 text-2xl">User</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar