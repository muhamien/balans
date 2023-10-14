import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import { HiMenu } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar(props) {
    const router = useRouter();

    return (
        <>
            <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="/images/BALANS.png" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Balans<span className="text-[#137536]">Work</span></span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <HiMenu/>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#137536]" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-[#137536] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Find Jobs</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-[#137536] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-[#137536] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 text-white px-4 md:border-0 ease-out duration-300 hover:bg-[#137536] bg-[#73B729] rounded-full ">Register</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}