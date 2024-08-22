import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="top-0 left-0 bg-vibrant w-full">
                    <div className="mx-auto px-4 sm:px-3 lg:px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex shrink-0">
                                    <a href="/" className="p-2 text-center text-3xl font-bold text-white">Ripiyu</a>
                                </div>
                            </div>
                            <div className="md-block">
                                <div className="ml-4 flex items-center space-x-4">
                                    <a href="/" className="p-2"><Image src="/images/notif_icon.png" alt="notification" width={30} height={30}></Image></a>
                                    <a href="/" className="text-white p-2">User</a>
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