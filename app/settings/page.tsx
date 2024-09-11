import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";
import SideBar from "../components/sidebar";

export default function settingsPage() {
    return (
        <>
            <Navbar></Navbar>

            <div className="flex flex-row h-[calc(100vh-64px)]">
                <SideBar></SideBar>
                <div className="text-black pl-6 pt-6 w-screen mr-6">
                    <div className="flex text-4xl py-8 pl-6 bg-cloudblue rounded-lg">
                        <h1>Settings</h1>
                    </div>
                    <div className="text-2xl indent-1 pb-2">
                        <br />
                        <h2>Account</h2>
                    </div>
                    <div className="pl-4">
                        <div className="justify-items-start">
                            <form action="">
                                <div  className="py-2">
                                    <label htmlFor="username">Username: </label><br />
                                    <input type="text" placeholder="Username baru" className="rounded-md border-slate-400 border-2"/><br />
                                </div>

                                <div className="py-2">
                                    <label htmlFor="name">Nama Lengkap: </label><br />
                                    <input type="text" placeholder="Ketik nama lengkap" className="rounded-md border-slate-400 border-2"/><br />
                                </div>

                                <div className="py-2">
                                    <label htmlFor="password-old">Password Lama: </label><br />
                                    <input type="password" placeholder="Lama" className="rounded-md border-slate-400 border-2"/><br />
                                </div>

                                <div className="py-2">
                                    <label htmlFor="password-new">Password Baru: </label><br />
                                    <input type="password" placeholder="Baru" className="rounded-md border-slate-400 border-2"/><br />
                                </div>

                                <br />
                                <button className="rounded-lg bg-vibrant bottom-0 right-0 text-white hover:bg-cloudblue hover:text-black">
                                    <input type="submit" value={"Simpan"} className="p-2"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
  