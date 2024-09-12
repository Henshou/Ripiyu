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
                            <div className="flex items-center">
                                <div className="flex space-x-4">
                                    <a href="/" className="p-2 md:hidden">
                                        <NotificationsNoneOutlinedIcon className="text-white" fontSize="large" />
                                    </a>
                                    <div className="flex items-center">
                                        <AccountCircleIcon className="text-white" fontSize="large" />
                                        <a href="/" className="text-white p-2 text-xl">User</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;